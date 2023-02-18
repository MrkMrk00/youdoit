import type { FunctionComponent } from 'react'
import type { RecipeLocaleResult } from '../../data/RecipeLocaleFragment'
import styles from './RecipeDetailPage.module.sass'

export interface RecipeDetailPageProps {
	recipeDetailPage: RecipeLocaleResult
}

export const RecipeDetailPage: FunctionComponent<RecipeDetailPageProps> = ({ recipeDetailPage }) => {
	console.log(recipeDetailPage)
	return (
		<div className={styles.wrapper}>
			<div>Recipe detail page</div>
		</div>
	)
}
