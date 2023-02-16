import type { FunctionComponent } from 'react'
import type { RecipeResult } from '../data/RecipeFragment'
import { PriceTag } from './PriceTag'
import styles from './RecommendedRecipes.module.sass'
import { TileImage } from './TileImage'

export interface RecommendedRecipesProps {
	recipes: RecipeResult[]
}

export const RecommendedRecipes: FunctionComponent<RecommendedRecipesProps> = ({ recipes }) => {
	return (
		<div className={styles.list}>
			{recipes.map((recipe) => {
				return (
					<div key={recipe.id} className={styles.tile}>
						<div className={styles.tileIn}>
							{recipe.mainImage && (
								<div className={styles.image}>
									<TileImage image={recipe.mainImage} fill objectFit="cover" />
								</div>
							)}
							<div className={styles.title}>{recipe.localesByLocale?.title}</div>
						</div>
						{recipe.price && (
							<div className={styles.price}>
								<PriceTag price={recipe.price} />
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}
