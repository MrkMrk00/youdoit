import { RichTextRenderer } from '@contember/react-client'
import clsx from 'clsx'
import type { FunctionComponent } from 'react'
import type { ImageResult } from '../data/ImageFragment'
import { BackButton } from './BackButton'
import styles from './DetailHeader.module.sass'
import type { RecipeAuthorProps } from './RecipeAuthor'
import { RecipeAuthor } from './RecipeAuthor'
import { TileImage } from './TileImage'

export interface DetailHeaderProps {
	image?: ImageResult
	allRecipesLink?: string | null
	title?: string
	description?: string
	author?: RecipeAuthorProps
}

export const DetailHeader: FunctionComponent<DetailHeaderProps> = ({
	image,
	allRecipesLink,
	title,
	description,
	author,
}) => {
	return (
		<div>
			{image && (
				<div className={styles.imageWrapper}>
					<div className={styles.image}>
						<TileImage image={image} fill objectFit="cover" />
					</div>
					<div className={clsx(styles.imageContent, description && styles.has_description)}>
						{allRecipesLink && <BackButton link={allRecipesLink} />}
						<div>
							<div className={styles.author}>
								<RecipeAuthor {...author} />
							</div>
							<div className={styles.title}>{title}</div>
							{description && (
								<div className={styles.description}>
									<RichTextRenderer source={description} />
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
