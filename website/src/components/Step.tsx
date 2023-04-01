import type { FunctionComponent } from 'react'
import type { StepResult } from '../data/StepFragment'
import styles from './Step.module.sass'
import { Timer } from './Timer'

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
			{step.hasTimer && step.timerCount && (
				<Timer startButtonTitle="Tapni pro spuštění" secondsToSet={step.timerCount} />
			)}
		</label>
	)
}
