import type { FunctionComponent } from 'react'
import type { StepGroupItemResult } from '../data/StepGroupItemFragment'
import { Icon } from './Icon'
import { Step } from './Step'
import styles from './StepItem.module.sass'

export interface StepItemProps {
	item: StepGroupItemResult
	disabled: boolean
}

export const StepItem: FunctionComponent<StepItemProps> = ({ item, disabled }) => {
	switch (item.type) {
		case 'step':
			return item.step ? <Step step={item.step} disabled={disabled} /> : null
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
