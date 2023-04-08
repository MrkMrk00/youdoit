import type { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react'
import styles from './Button.module.sass'
import { Icon } from './Icon'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export const Button: FunctionComponent<ButtonProps> = ({ children, ...otherPorps }) => {
	return (
		<button className={styles.wrapper} {...otherPorps}>
			{children}
			<div className={styles.icon}>
				<Icon name="arrowRight" />
			</div>
		</button>
	)
}
