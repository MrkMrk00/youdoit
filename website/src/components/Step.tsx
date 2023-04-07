import type { FunctionComponent } from 'react'
import type { StepResult } from '../data/StepFragment'
import styles from './Step.module.sass'
import { Timer } from './Timer'

export interface StepProps {
	step: StepResult
	disabled: boolean
	onChange: (checked: boolean) => void
	checked: boolean
}

export const Step: FunctionComponent<StepProps> = ({ step, disabled, onChange, checked }) => {
	return (
		<label className={styles.checkbox}>
			<input
				type="checkbox"
				className={styles.input}
				disabled={disabled}
				checked={checked}
				onChange={(event) => {
					onChange(event.target.checked)
				}}
			/>
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
