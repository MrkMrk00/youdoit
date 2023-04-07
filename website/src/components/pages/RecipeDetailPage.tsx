import { useMutation, useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import type { FunctionComponent } from 'react'
import { useMemo, useState } from 'react'
import { useMirrorLoading } from 'shared-loading-indicator'
import type { RecipeLocaleResult } from '../../data/RecipeLocaleFragment'
import { contember } from '../../utilities/contember'
import { scalarResolver } from '../../utilities/createScalarResolver'
import { hardcodedUserEmail } from '../../utilities/hardcodedUserEmail'
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

	const mutation = useMutation(
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

	useMirrorLoading(mutation.isLoading)

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
			getPinnedRecipe: [{ by: { id: pinnedId } }, { id: true }],
		})
		return data.getPinnedRecipe
	})

	const readOnly = !pinnedData.data

	useMirrorLoading(pinnedData.isLoading)

	return (
		<>
			<div className={styles.wrapper}>
				{/* <div className={styles.overlay} /> */}
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
					<button
						type="button"
						onClick={() => {
							mutation.mutate()
						}}
						disabled={mutation.isLoading}
					>
						Add to favourites
					</button>
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
		</>
	)
}
