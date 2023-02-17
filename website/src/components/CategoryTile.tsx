import { RichTextRenderer } from '@contember/react-client'
import clsx from 'clsx'
import type { FunctionComponent } from 'react'
import type { CategoryLocaleResult } from '../data/CategoryLocaleFragment'
import styles from './RecipeTile.module.sass'
import { TileImage } from './TileImage'

export interface CategoryTileProps {
	tile: CategoryLocaleResult
	type: 'main' | 'withDescription'
}

export const CategoryTile: FunctionComponent<CategoryTileProps> = ({ tile, type }) => {
	return (
		<div className={clsx(styles.wrapper, styles[`is_${type}`])}>
			<div className={styles.content}>
				{tile.base?.image && (
					<div className={styles.image}>
						<TileImage image={tile.base?.image} fill objectFit="cover" />
					</div>
				)}
				<div className={styles.contentIn}>
					<div className={styles.title}>{tile.title}</div>
				</div>
			</div>
			{tile.description && type === 'withDescription' && (
				<div className={styles.tileDescription}>
					<RichTextRenderer source={tile.description} />
				</div>
			)}
		</div>
	)
}
