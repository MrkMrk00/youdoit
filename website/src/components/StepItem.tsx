import type { FunctionComponent } from 'react'
import { Icon } from './Icon'
import type { StepProps } from './Step'
import { Step } from './Step'
import styles from './StepItem.module.sass'

type StepType = {
	type: 'step'
	props: StepProps
}

type TipType = {
	type: 'tip'
	props: { title: string }
}

export interface StepItemProps {
	item: StepType | TipType
}

export const StepItem: FunctionComponent<StepItemProps> = ({ item }) => {
	switch (item.type) {
		case 'step':
			return <Step {...item.props} />
		case 'tip':
			return (
				<div className={styles.tipWrapper}>
					<div className={styles.bulb}>
						<Icon name="bulb" />
					</div>
					<div className={styles.tipTitle}>{item.props.title}</div>
				</div>
			)
	}
	return null
}
