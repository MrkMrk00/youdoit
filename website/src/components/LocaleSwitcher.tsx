import type { FunctionComponent } from 'react'
import type { PageLocaleResult } from '../data/PageLocaleFragment'
import styles from './LocaleSwitcher.module.sass'

export interface LocaleSwitcherProps {
	activeLocale?: string
	pageLocales?: PageLocaleResult['locales']
}

export const LocaleSwitcher: FunctionComponent<LocaleSwitcherProps> = ({ activeLocale, pageLocales }) => {
	console.log(activeLocale, pageLocales)
	return (
		<div className={styles.wrapper}>
			<div>Locale switcher</div>
		</div>
	)
}
