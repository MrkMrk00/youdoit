import type { FunctionComponent } from 'react'
import type { PinnedRecipesPageLocaleResult } from '../../data/PinnedRecipesLocaleFragment'
import { Container } from '../Container'
import styles from './PinnedRecipesPage.module.sass'

export interface PinnedRecipesPageProps {
	pinnedrecipesPage: PinnedRecipesPageLocaleResult
}

export const PinnedRecipesPage: FunctionComponent<PinnedRecipesPageProps> = ({ pinnedrecipesPage }) => {
	return (
		<Container>
			<div className={styles.wrapper}>
				<div className={styles.title}>{pinnedrecipesPage.title}</div>
			</div>
		</Container>
	)
}
