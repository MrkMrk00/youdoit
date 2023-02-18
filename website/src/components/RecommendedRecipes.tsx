import Link from 'next/link'
import type { FunctionComponent } from 'react'
import { Fragment } from 'react'
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
					<Fragment key={recipe.id}>
						<Link href={recipe.link?.url ?? '/'}>
							<div className={styles.tile}>
								<div className={styles.tileIn}>
									{recipe.base?.tileImage && (
										<div className={styles.imageWrapper}>
											<div className={styles.image}>
												<TileImage image={recipe.base.tileImage} fill objectFit="cover" />
											</div>
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
						</Link>
					</Fragment>
				)
			})}
		</div>
	)
}
