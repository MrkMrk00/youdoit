import { RichTextRenderer } from '@contember/react-client'
import type { FunctionComponent } from 'react'
import type { RecipeResult } from '../data/RecipeFragment'
import styles from './RecipeTileWithDescription.module.sass'
import { TileImage } from './TileImage'

export type RecipeTileWithDescriptionProps = {
	tile: RecipeResult
}

export const RecipeTileWithDescription: FunctionComponent<RecipeTileWithDescriptionProps> = ({ tile }) => {
	return (
		<div className={styles.wrapper}>
			{tile.mainImage?.url && (
				<div className={styles.image}>
					<TileImage image={tile.mainImage} fill objectFit="cover" />
				</div>
			)}
			<div>{tile.localesByLocale?.title}</div>
			{tile.localesByLocale?.tileDescription && (
				<div>
					<RichTextRenderer source={tile.localesByLocale?.tileDescription} />
				</div>
			)}
		</div>
	)
}
