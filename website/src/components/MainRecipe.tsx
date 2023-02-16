import type { FunctionComponent } from 'react'
import type { RecipeResult } from '../data/RecipeFragment'
import styles from './MainRecipe.module.sass'
import { PriceTag } from './PriceTag'
import { TileImage } from './TileImage'

export interface MainRecipeProps {
	recipe: RecipeResult
}

export const MainRecipe: FunctionComponent<MainRecipeProps> = ({ recipe }) => {
	return (
		<div className={styles.wrapper}>
			{recipe.mainImage?.url && (
				<div className={styles.image}>
					<TileImage image={recipe.mainImage} fill objectFit="cover" />
				</div>
			)}
			<div className={styles.content}>
				<div className={styles.title}>{recipe.localesByLocale?.title}</div>
				{recipe.price && (
					<div className={styles.price}>
						<PriceTag price={recipe.price} />
					</div>
				)}
			</div>
		</div>
	)
}
