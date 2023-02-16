import type { FunctionComponent } from 'react'
import { Fragment } from 'react'
import type { RecipeResult } from '../data/RecipeFragment'
import styles from './RecipeCarousel.module.sass'
import { RecipeTile } from './RecipeTile'

export type RecipeCarouselProps = {
	tiles: RecipeResult[]
}

export const RecipeCarousel: FunctionComponent<RecipeCarouselProps> = ({ tiles }) => {
	return (
		<div className={styles.wrapper}>
			{tiles.map((recipe) => {
				return (
					<Fragment key={recipe.id}>
						<RecipeTile tile={recipe} type="carousel" />
					</Fragment>
				)
			})}
		</div>
	)
}
