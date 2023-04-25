import Link from 'next/link'
import type { FunctionComponent } from 'react'
import { useMemo } from 'react'
import { useTranslate } from '../hooks/useTranslate'
import styles from './LocaleSwitcher.module.sass'

export interface LocaleSwitcherProps {
	activeLocale?: string
	pageLocales?: Array<{ link: string; code: string }>
}

export const LocaleSwitcher: FunctionComponent<LocaleSwitcherProps> = ({ activeLocale, pageLocales }) => {
	const otherPageLocales = useMemo(
		() => pageLocales?.filter((locale) => locale.code !== activeLocale),
		[activeLocale, pageLocales],
	)

	const translate = useTranslate()

	console.log('otherPageLocales', otherPageLocales)

	return (
		<div className={styles.wrapper}>
			{otherPageLocales?.map((locale, i) => {
				return (
					<Link key={i} href={locale.link}>
						{translate('localeSwitcher.text') + ' ' + locale.code}
					</Link>
				)
			})}
		</div>
	)
}
