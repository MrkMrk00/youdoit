import { RichTextRenderer } from '@contember/react-client'
import type { FunctionComponent } from 'react'
import type { RecipeResult } from '../data/RecipeFragment'
import { PriceTag } from './PriceTag'
import styles from './RecipeTileWithDescription.module.sass'
import { TileImage } from './TileImage'

export type RecipeTileWithDescriptionProps = {
	tile: RecipeResult
}

export const RecipeTileWithDescription: FunctionComponent<RecipeTileWithDescriptionProps> = ({ tile }) => {
	return (
		<div className={styles.wrapper}>
			{tile.mainImage?.url && (
				<div className={styles.imageWrapper}>
					<div className={styles.image}>
						<TileImage image={tile.mainImage} fill objectFit="cover" />
					</div>
					<div className={styles.content}>
						<div className={styles.title}>{tile.localesByLocale?.title}</div>
						{tile.price && (
							<div>
								<PriceTag price={tile.price} />
							</div>
						)}
					</div>
				</div>
			)}
			<div className={styles.text}>
				{tile.localesByLocale?.tileDescription && (
					<div>
						<RichTextRenderer source={tile.localesByLocale?.tileDescription} />
					</div>
				)}
			</div>
		</div>
	)
}
