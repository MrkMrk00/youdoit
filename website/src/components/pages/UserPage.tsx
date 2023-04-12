import Image from 'next/image'
import type { FunctionComponent } from 'react'
import type { UserResult } from '../../data/UserFragment'
import { Container } from '../Container'
import styles from './UserPage.module.sass'

export interface UserPageProps {
	user: UserResult
}

export const UserPage: FunctionComponent<UserPageProps> = ({ user }) => {
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
				<div>Linky</div>
			</div>
		</Container>
	)
}
