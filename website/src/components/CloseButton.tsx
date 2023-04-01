import type { FunctionComponent } from 'react'
import styles from './CloseButton.module.sass'

export interface CloseButtonProps {
	onClose: () => void
}

export const CloseButton: FunctionComponent<CloseButtonProps> = ({ onClose }) => {
	return (
		<button className={styles.button} onClick={onClose}>
			<div className={styles.line1} />
			<div className={styles.line2} />
		</button>
	)
}
