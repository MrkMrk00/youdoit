import type { FunctionComponent } from 'react'
import styles from './StepGroupButton.module.sass'

export interface StepGroupButtonProps {
	buttonTitle: string
	onClick: () => void
}

export const StepGroupButton: FunctionComponent<StepGroupButtonProps> = ({ buttonTitle, onClick }) => {
	return (
		<button className={styles.wrapper} onClick={onClick}>
			<div>{buttonTitle}</div>
		</button>
	)
}
