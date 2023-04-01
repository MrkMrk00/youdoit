import type { FunctionComponent } from 'react'
import type { StepResult } from '../data/StepFragment'
import styles from './Step.module.sass'

export interface StepProps {
	step: StepResult
}

export const Step: FunctionComponent<StepProps> = ({ step }) => {
	return (
		<label className={styles.checkbox}>
			<input type="checkbox" className={styles.input} />
			<div className={styles.label}>
				{step.localesByLocale?.title}
				<span className={styles.tick} />
			</div>
		</label>
	)
}
