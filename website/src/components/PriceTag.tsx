import type { FunctionComponent } from 'react'
import styles from './PriceTag.module.sass'

export type PriceTagProps = {
	price: string
}

export const PriceTag: FunctionComponent<PriceTagProps> = ({ price }) => {
	return <div className={styles.wrapper}>{price}</div>
}
