import type { FunctionComponent } from 'react'
import styles from './StepGroupButton.module.sass'

export interface StepGroupButtonProps {
	buttonTitle: string
	// onClick?: () => void
}

export const StepGroupButton: FunctionComponent<StepGroupButtonProps> = ({ buttonTitle }) => {
	return (
		<button className={styles.wrapper}>
			<div>{buttonTitle}</div>
		</button>
	)
}
