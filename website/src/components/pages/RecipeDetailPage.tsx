import type { FunctionComponent } from 'react'
import type { RecipeLocaleResult } from '../../data/RecipeLocaleFragment'
import { DetailHeader } from '../DetailHeader'
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
		</div>
	)
}
