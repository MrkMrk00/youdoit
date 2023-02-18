import Image from 'next/image'
import type { FunctionComponent } from 'react'
import type { ImageResult } from '../data/ImageFragment'
import styles from './RecipeAuthor.module.sass'

export interface RecipeAuthorProps {
	firstName?: string
	lastName?: string
	image?: ImageResult
	publishDate?: string
}

export const RecipeAuthor: FunctionComponent<RecipeAuthorProps> = ({ firstName, lastName, image, publishDate }) => {
	const publishYear = publishDate?.split('-')[0]

	return (
		<div className={styles.wrapper}>
			{image?.url && (
				<div className={styles.image}>
					<Image src={image?.url} alt="" fill />
				</div>
			)}
			<div className={styles.name}>
				{firstName} {lastName}
				{', ' + publishYear}
			</div>
		</div>
	)
}
