import clsx from 'clsx'
import type { FunctionComponent } from 'react'
import { Fragment, useState } from 'react'
import type { RecipeLocaleResult } from '../../data/RecipeLocaleFragment'
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

	const [activeStep, setActiveStep] = useState<number | null>(1)

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.overlay} />
				<div className={styles.header}>
					<DetailHeader
						allRecipesLink={allRecipesLink}
						image={recipeDetailPage.base?.mainImage}
						title={recipeDetailPage.title}
						description={recipeDetailPage.description}
						author={author}
					/>
				</div>
				<div className={styles.contentIn}>
					<Container>
						<div className={styles.tipGroupList}>
							{recipeDetailPage.base?.tipGroups.map((group) => {
								return (
									<Fragment key={group.id}>
										<TipGroup group={group} />
									</Fragment>
								)
							})}
						</div>

						<div className={styles.stepGroupList}>
							{recipeDetailPage.base?.stepsGroups.map((group, index) => {
								const isActive = activeStep === index
								return (
									<Fragment key={group.id}>
										<div className={clsx(styles.stepGroup, isActive && styles.isActive)}>
											<StepGroup group={group} index={index + 1} />
										</div>
									</Fragment>
								)
							})}
						</div>
					</Container>
				</div>
			</div>
		</>
	)
}
