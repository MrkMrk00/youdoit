import type { FunctionComponent } from 'react'
import type { RecipeLocaleResult } from '../data/RecipeLocaleFragment'
import { PriceTag } from './PriceTag'
import styles from './RecipeTile.module.sass'
import { TileImage } from './TileImage'

export interface RecipeTile {
	tile: RecipeLocaleResult
}

export const RecipeTile: FunctionComponent<RecipeTile> = ({ tile }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				{tile.base?.tileImage && (
					<div className={styles.image}>
						<TileImage image={tile.base?.tileImage} fill objectFit="cover" />
					</div>
				)}
				<div className={styles.contentIn}>
					<div className={styles.categories}>
						{/* Show only two first categories */}
						{tile.base?.categories.map((category, index) => index <= 2 && category.localesByLocale?.title).join(', ')}
					</div>
					<div className={styles.title}>{tile.title}</div>
					{tile.base?.price && (
						<div className={styles.price}>
							<PriceTag price={tile.base.price} />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
