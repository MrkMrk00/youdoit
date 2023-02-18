import type { FunctionComponent } from 'react'
import type { CategoryLocaleResult } from '../../data/CategoryLocaleFragment'
import { isDefined } from '../../utilities/isDefined'
import { Container } from '../Container'
import { DetailHeader } from '../DetailHeader'
import { RecommendedRecipes } from '../RecommendedRecipes'
import styles from './CategoryPage.module.sass'

export interface CategoryPageProps {
	categoryPage: CategoryLocaleResult
	allRecipesLink?: string | null
}

export const CategoryPage: FunctionComponent<CategoryPageProps> = ({ categoryPage, allRecipesLink }) => {
	return (
		<div>
			<DetailHeader allRecipesLink={allRecipesLink} image={categoryPage.base?.image} title={categoryPage.title} />
			<Container>
				{(categoryPage.base?.recipes ?? []).length > 0 && (
					<div className={styles.recipes}>
						<RecommendedRecipes
							recipes={(categoryPage.base?.recipes ?? []).map((recipe) => recipe.localesByLocale).filter(isDefined)}
						/>
					</div>
				)}
			</Container>
		</div>
	)
}
