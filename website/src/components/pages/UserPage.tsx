import Image from 'next/image'
import Link from 'next/link'
import type { FunctionComponent } from 'react'
import type { UserResult } from '../../data/UserFragment'
import { useTranslate } from '../../hooks/useTranslate'
import { Container } from '../Container'
import { Icon } from '../Icon'
import type { LocaleSwitcherProps } from '../LocaleSwitcher'
import { LocaleSwitcher } from '../LocaleSwitcher'
import styles from './UserPage.module.sass'

export interface UserPageProps {
	user: UserResult
	pinnedRecipesPageUrl: string | null
	localeSwitcher?: LocaleSwitcherProps
}

export const UserPage: FunctionComponent<UserPageProps> = ({ user, pinnedRecipesPageUrl, localeSwitcher }) => {
	const translate = useTranslate()
	return (
		<Container>
			<div className={styles.wrapper}>
				{user.image?.url && (
					<div className={styles.image}>
						<Image src={user.image?.url} alt="" fill />
					</div>
				)}
				<div className={styles.name}>
					{user.firstName} {user.lastName}
				</div>
				<div className={styles.links}>
					{pinnedRecipesPageUrl && (
						<div className={styles.link}>
							<Link href={pinnedRecipesPageUrl}>{translate('userPage.pinnedRecipes')}</Link>
							<Icon name="arrowRight" />
						</div>
					)}
					<div className={styles.link}>
						<LocaleSwitcher {...localeSwitcher} />
					</div>
				</div>
			</div>
		</Container>
	)
}
