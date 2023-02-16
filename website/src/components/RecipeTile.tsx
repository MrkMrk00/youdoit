import { RichTextRenderer } from '@contember/react-client'
import clsx from 'clsx'
import type { FunctionComponent } from 'react'
import type { RecipeResult } from '../data/RecipeFragment'
import { PriceTag } from './PriceTag'
import styles from './RecipeTile.module.sass'
import { TileImage } from './TileImage'

export interface RecipeTile {
	tile: RecipeResult
	type: 'main' | 'carousel' | 'withDescription'
}

export const RecipeTile: FunctionComponent<RecipeTile> = ({ tile, type }) => {
	return (
		<div className={clsx(styles.wrapper, styles[`is_${type}`])}>
			<div className={styles.content}>
				{tile.mainImage?.url && (
					<div className={styles.image}>
						<TileImage image={tile.mainImage} fill objectFit="cover" />
					</div>
				)}
				<div className={styles.contentIn}>
					<div className={styles.title}>{tile.localesByLocale?.title}</div>
					{tile.price && (
						<div className={styles.price}>
							<PriceTag price={tile.price} />
						</div>
					)}
				</div>
			</div>
			{tile.localesByLocale?.tileDescription && type === 'withDescription' && (
				<div className={styles.tileDescription}>
					<RichTextRenderer source={tile.localesByLocale?.tileDescription} />
				</div>
			)}
		</div>
	)
}
