import Link from 'next/link'
import type { FunctionComponent } from 'react'
import styles from './BackButton.module.sass'

export interface BackButtonProps {
	link: string
}

export const BackButton: FunctionComponent<BackButtonProps> = ({ link }) => {
	return (
		<Link href={link}>
			<div className={styles.wrapper}>
				<div className={styles.arrow} />
			</div>
		</Link>
	)
}
