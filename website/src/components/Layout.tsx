import clsx from 'clsx'
import Link from 'next/link'
import type { FunctionComponent, ReactNode } from 'react'
import { Icon } from './Icon'
import styles from './Layout.module.sass'

export type LayoutProps = {
	children: ReactNode
	homePageUrl: string | null
	currentPageUrl?: string
}

export const Layout: FunctionComponent<LayoutProps> = ({ children, homePageUrl, currentPageUrl }) => {
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
				{homePageUrl ? (
					<Link href={homePageUrl}>
						<MarketIcon currentPageUrl={currentPageUrl} iconUrl={homePageUrl} />
					</Link>
				) : (
					<MarketIcon currentPageUrl={currentPageUrl} iconUrl={homePageUrl} />
				)}
			</div>
		</div>
	)
}

type IconProps = {
	currentPageUrl?: string
	iconUrl: string | null
}

const MarketIcon: FunctionComponent<IconProps> = ({ currentPageUrl, iconUrl }) => {
	return (
		<div className={clsx(styles.marketIcon, iconUrl === currentPageUrl && styles.isActive)}>
			<Icon name="market" />
		</div>
	)
}
