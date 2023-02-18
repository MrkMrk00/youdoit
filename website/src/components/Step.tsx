import type { FunctionComponent } from 'react'
import type { StepResult } from '../data/StepFragment'
import styles from './Step.module.sass'

export interface StepProps {
	step: StepResult
}

export const Step: FunctionComponent<StepProps> = ({ step }) => {
	return (
		<label className={styles.wrapper}>
			<input type="checkbox" className={styles.checkbox} />
			{step.localesByLocale?.title}
		</label>
	)
}
