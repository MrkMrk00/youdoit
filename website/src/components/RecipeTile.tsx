import type { FunctionComponent } from 'react'
import type { RecipeResult } from '../data/RecipeFragment'
import { PriceTag } from './PriceTag'
import styles from './RecipeTile.module.sass'
import { TileImage } from './TileImage'

export interface RecipeTile {
	tile: RecipeResult
}

export const RecipeTile: FunctionComponent<RecipeTile> = ({ tile }) => {
	return (
		<div className={styles.wrapper}>
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
		</div>
	)
}
