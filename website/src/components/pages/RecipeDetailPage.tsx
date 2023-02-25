import type { FunctionComponent } from 'react'
import { Fragment } from 'react'
import type { RecipeLocaleResult } from '../../data/RecipeLocaleFragment'
import { Container } from '../Container'
import { DetailHeader } from '../DetailHeader'
import { StepGroup } from '../StepGroup'
import { Timer } from '../Timer'
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

	return (
		<div className={styles.wrapper}>
			<DetailHeader
				allRecipesLink={allRecipesLink}
				image={recipeDetailPage.base?.mainImage}
				title={recipeDetailPage.title}
				description={recipeDetailPage.description}
				author={author}
			/>
			<Container>
				<Timer startButtonTitle="Tapni pro spuštění" secondsToSet={60} />
				<div className={styles.stepGroupList}>
					{recipeDetailPage.base?.stepsGroups.map((group, index) => {
						return (
							<Fragment key={group.id}>
								<StepGroup group={group} index={index + 1} />
							</Fragment>
						)
					})}
				</div>
			</Container>
		</div>
	)
}
