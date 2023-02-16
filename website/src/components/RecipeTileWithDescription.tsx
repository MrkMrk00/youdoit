import type { FunctionComponent } from 'react'
import type { RecipeResult } from '../data/RecipeFragment'
import styles from './RecipeTileWithDescription.module.sass'

export type RecipeTileWithDescriptionProps = {
	tile: RecipeResult
}

export const RecipeTileWithDescription: FunctionComponent<RecipeTileWithDescriptionProps> = ({ tile }) => {
	return (
		<div className={styles.wrapper}>
			<div>{tile.localesByLocale?.title}</div>
		</div>
	)
}
