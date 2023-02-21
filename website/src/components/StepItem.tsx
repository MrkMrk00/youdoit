import type { FunctionComponent } from 'react'
import type { StepGroupItemResult } from '../data/StepGroupItemFragment'
import { Icon } from './Icon'
import styles from './StepItem.module.sass'

export interface StepItemProps {
	item: StepGroupItemResult
}

export const StepItem: FunctionComponent<StepItemProps> = ({ item }) => {
	switch (item.type) {
		case 'step':
			return (
				<label className={styles.checkbox}>
					<input type="checkbox" className={styles.input} />
					<div className={styles.label}>
						{item.step?.localesByLocale?.title}
						<span className={styles.tick} />
					</div>
				</label>
			)
		case 'tip':
			return (
				<div className={styles.tipWrapper}>
					<div className={styles.bulb}>
						<Icon name="bulb" />
					</div>
					<div className={styles.tipTitle}>{item.tip?.localesByLocale?.title}</div>
				</div>
			)
	}
	return null
}
