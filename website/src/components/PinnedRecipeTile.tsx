import type { FunctionComponent } from 'react'
import type { RecipeLocaleResult } from '../data/RecipeLocaleFragment'
import styles from './PinnedRecipeTile.module.sass'

export interface PinnedRecipeTileProps {
	tile: RecipeLocaleResult
}

export const PinnedRecipeTile: FunctionComponent<PinnedRecipeTileProps> = ({ tile }) => {
	return (
		<div className={styles.wrapper}>
			<div>{tile.title}</div>
		</div>
	)
}
