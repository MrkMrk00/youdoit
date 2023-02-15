import Image from 'next/image'
import type { FunctionComponent } from 'react'
import type { RecipeResult } from '../data/RecipeFragment'
import { PriceTag } from './PriceTag'
import styles from './RecipeTile.module.sass'

export type RecipeTileProps = {
	tile: RecipeResult
}

export const RecipeTile: FunctionComponent<RecipeTileProps> = ({ tile }) => {
	return (
		<div className={styles.wrapper}>
			{tile.mainImage?.url && (
				<div className={styles.image}>
					<Image src={tile.mainImage?.url} alt="" fill />
				</div>
			)}
			<div className={styles.content}>
				<div className={styles.title}>{tile.localesByLocale?.title}</div>
				{tile.price && (
					<div className={styles.price}>
						<PriceTag price={tile.price} />
					</div>
				)}
			</div>
		</div>
	)
}
