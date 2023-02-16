import clsx from 'clsx'
import Image from 'next/image'
import type { FunctionComponent } from 'react'
import type { ImageResult } from '../data/ImageFragment'
import styles from './TileImage.module.sass'

export type TileImageProps = {
	image: ImageResult
	fill?: boolean
	width?: ImageResult['width']
	height?: ImageResult['height']
	objectFit?: 'cover' | 'contain'
}

export const TileImage: FunctionComponent<TileImageProps> = ({ image, fill, width, height, objectFit }) => {
	return (
		<div className={clsx(styles.image, styles[`is_${objectFit}`])}>
			<Image src={image.url} alt="" fill={fill} width={width} height={height} />
		</div>
	)
}
