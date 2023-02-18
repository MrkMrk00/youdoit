import type { FunctionComponent } from 'react'
import type { ImageResult } from '../data/ImageFragment'
import { BackButton } from './BackButton'
import styles from './DetailHeader.module.sass'
import { TileImage } from './TileImage'

export interface DetailHeaderProps {
	image?: ImageResult
	allRecipesLink?: string | null
	title?: string
}

export const DetailHeader: FunctionComponent<DetailHeaderProps> = ({ image, allRecipesLink, title }) => {
	return (
		<div>
			{image && (
				<div className={styles.imageWrapper}>
					<div className={styles.image}>
						<TileImage image={image} fill objectFit="cover" />
					</div>
					<div className={styles.imageContent}>
						{allRecipesLink && <BackButton link={allRecipesLink} />}
						<div className={styles.title}>{title}</div>
					</div>
				</div>
			)}
		</div>
	)
}
