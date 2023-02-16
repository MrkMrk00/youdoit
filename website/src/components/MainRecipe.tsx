import Image from 'next/image'
import type { FunctionComponent } from 'react'
import type { RecipeResult } from '../data/RecipeFragment'
import styles from './MainRecipe.module.sass'
import { PriceTag } from './PriceTag'

export interface MainRecipeProps {
	recipe: RecipeResult
}

export const MainRecipe: FunctionComponent<MainRecipeProps> = ({ recipe }) => {
	return (
		<div className={styles.wrapper}>
			{recipe.mainImage?.url && (
				<div className={styles.image}>
					<Image src={recipe.mainImage?.url} alt="" fill />
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
