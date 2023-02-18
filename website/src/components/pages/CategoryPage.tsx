import type { FunctionComponent } from 'react'
import type { CategoryLocaleResult } from '../../data/CategoryLocaleFragment'
import { isDefined } from '../../utilities/isDefined'
import { BackButton } from '../BackButton'
import { Container } from '../Container'
import { RecommendedRecipes } from '../RecommendedRecipes'
import { TileImage } from '../TileImage'
import styles from './CategoryPage.module.sass'

export interface CategoryPageProps {
	categoryPage: CategoryLocaleResult
	allRecipesLink?: string | null
}

export const CategoryPage: FunctionComponent<CategoryPageProps> = ({ categoryPage, allRecipesLink }) => {
	return (
		<div>
			{categoryPage.base?.image && (
				<div className={styles.imageWrapper}>
					<div className={styles.image}>
						<TileImage image={categoryPage.base?.image} fill objectFit="cover" />
					</div>
					<div className={styles.imageContent}>
						{allRecipesLink && <BackButton link={allRecipesLink} />}
						<div className={styles.title}>{categoryPage.title}</div>
					</div>
				</div>
			)}
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
