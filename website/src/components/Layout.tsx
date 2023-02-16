import type { FunctionComponent, ReactNode } from 'react'
import { Icon } from './Icon'
import styles from './Layout.module.sass'

export type LayoutProps = {
	children: ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>{children}</div>
			<div className={styles.navigation}>
				<div className={styles.personalIcon}>
					<Icon name="personal" />
				</div>
				<div className={styles.appleIcon}>
					<Icon name="apple" />
				</div>
				<div className={styles.marketIcon}>
					<Icon name="market" />
				</div>
			</div>
		</div>
	)
}
