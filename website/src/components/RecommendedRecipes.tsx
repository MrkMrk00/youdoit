import type { FunctionComponent } from 'react'
import type { RecipeLocaleResult } from '../data/RecipeLocaleFragment'
import { PriceTag } from './PriceTag'
import styles from './RecommendedRecipes.module.sass'
import { TileImage } from './TileImage'

export interface RecommendedRecipesProps {
	recipes: RecipeLocaleResult[]
}

export const RecommendedRecipes: FunctionComponent<RecommendedRecipesProps> = ({ recipes }) => {
	return (
		<div className={styles.list}>
			{recipes.map((recipe) => {
				return (
					<div key={recipe.id} className={styles.tile}>
						<div className={styles.tileIn}>
							{recipe.base?.tileImage && (
								<div className={styles.image}>
									<TileImage image={recipe.base.tileImage} fill objectFit="cover" />
								</div>
							)}
							<div className={styles.title}>{recipe.title}</div>
						</div>
						{recipe.base?.price && (
							<div className={styles.price}>
								<PriceTag price={recipe.base?.price} />
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}
