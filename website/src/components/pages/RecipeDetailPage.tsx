import { useMutation, useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import type { FunctionComponent } from 'react'
import { useMemo, useState } from 'react'
import { useMirrorLoading } from 'shared-loading-indicator'
import type { RecipeLocaleResult } from '../../data/RecipeLocaleFragment'
import { useTranslate } from '../../hooks/useTranslate'
import { contember } from '../../utilities/contember'
import { scalarResolver } from '../../utilities/createScalarResolver'
import { hardcodedUserEmail } from '../../utilities/hardcodedUserEmail'
import { isDefined } from '../../utilities/isDefined'
import { Button } from '../Button'
import { Container } from '../Container'
import { DetailHeader } from '../DetailHeader'
import { StepGroup } from '../StepGroup'
import { TipGroup } from '../TipGroup'
import styles from './RecipeDetailPage.module.sass'

export interface RecipeDetailPageProps {
	recipeDetailPage: RecipeLocaleResult
	allRecipesLink?: string | null
}

export const RecipeDetailPage: FunctionComponent<RecipeDetailPageProps> = ({ recipeDetailPage, allRecipesLink }) => {
	const author = {
		firstName: recipeDetailPage.base?.createdBy?.firstName,
		lastName: recipeDetailPage.base?.createdBy?.lastName,
		image: recipeDetailPage.base?.createdBy?.image,
		publishDate: recipeDetailPage.base?.publishDate,
	}

	const router = useRouter()

	const [activeStep, setActiveStep] = useState<number | null>(0)

	const pinnedId = useMemo(() => {
		const id = router.query.pinnedId
		if (typeof id === 'string') {
			return id
		}
	}, [router.query.pinnedId])

	const pinnedData = useQuery([pinnedId], async () => {
		if (!pinnedId) {
			return null
		}
		const data = await contember('query', { scalars: scalarResolver })({
			getPinnedRecipe: [
				{ by: { id: pinnedId } },
				{ id: true, implementationDates: [{}, { step: [{}, { id: true }] }] },
			],
		})
		return data.getPinnedRecipe
	})

	const readOnly = !pinnedData.data

	const fullfilledStep = useMemo(
		() => pinnedData.data?.implementationDates.map((date) => date.step?.id).filter(isDefined) ?? [],
		[pinnedData.data?.implementationDates],
	)

	useMirrorLoading(pinnedData.isLoading)

	const createPinnedMutation = useMutation(
		async () => {
			const data = await contember('mutation', { scalars: scalarResolver })({
				createPinnedRecipe: [
					{
						data: {
							user: { connect: { email: hardcodedUserEmail } },
							derivedBy: { connect: { id: recipeDetailPage.base?.id } }, //@TODO investigate why ? is needed
						},
					},
					{ ok: true, errorMessage: true, node: { id: true } },
				],
			})
			return data.createPinnedRecipe.node?.id
		},
		{
			onSuccess: (id) => {
				router.push({ pathname: router.asPath, query: { pinnedId: id } })
			},
		},
	)
	useMirrorLoading(createPinnedMutation.isLoading)

	const updateStepImplementationMutation = useMutation(
		async ({ checked, stepId }: { checked: boolean; stepId: string }) => {
			if (checked) {
				await contember('mutation', { scalars: scalarResolver })({
					createImplemetationDate: [
						{
							data: {
								pinnedRecipe: { connect: { id: pinnedId } },
								step: { connect: { id: stepId } },
							},
						},
						{ ok: true, errorMessage: true },
					],
				})
			} else {
				await contember('mutation', { scalars: scalarResolver })({
					deleteImplemetationDate: [
						{
							by: {
								pinnedRecipe: { id: pinnedId },
								step: { id: stepId },
							},
						},
						{ ok: true, errorMessage: true },
					],
				})
			}
		},
		{
			onSuccess: () => {
				pinnedData.refetch()
			},
		},
	)
	useMirrorLoading(updateStepImplementationMutation.isLoading)

	const translate = useTranslate()

	return (
		<Container>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<DetailHeader
						allRecipesLink={allRecipesLink}
						image={recipeDetailPage.base?.mainImage}
						title={recipeDetailPage.title}
						description={recipeDetailPage.description}
						author={author}
					/>
				</div>
				{readOnly && (
					<>
						<div className={styles.overlay}>
							<div className={styles.pinButton}>
								<Button
									type="button"
									onClick={() => {
										createPinnedMutation.mutate()
									}}
									disabled={createPinnedMutation.isLoading}
								>
									{translate('recipeDetailPage.pinButton')}
								</Button>
							</div>
						</div>
					</>
				)}
				<div className={styles.contentIn}>
					<Container>
						<div className={styles.tipGroupList}>
							{recipeDetailPage.base?.tipGroups.map((group) => {
								return <TipGroup group={group} key={group.id} />
							})}
						</div>

						<div className={styles.stepGroupList}>
							{recipeDetailPage.base?.stepsGroups.map((group, index) => {
								const isActive = activeStep === index
								return (
									<div className={clsx(styles.stepGroup, isActive && styles.isActive)} key={group.id}>
										<StepGroup
											fullFilledSteps={fullfilledStep}
											onChange={(checked, stepId) => {
												updateStepImplementationMutation.mutate({ checked, stepId })
											}}
											disabled={readOnly}
											group={group}
											index={index + 1}
											onNextStep={() => setActiveStep(activeStep && activeStep + 1)}
										/>
									</div>
								)
							})}
						</div>
					</Container>
				</div>
			</div>
		</Container>
	)
}
