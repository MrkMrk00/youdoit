import { useCallback, useContext } from 'react'
import { TranslationsContext } from '../contexts/TranslationsContext'

export const useTranslate = () => {
	const translations = useContext(TranslationsContext)

	return useCallback(
		(key: string) => {
			return translations.translationsEntries[key]
		},
		[translations.translationsEntries],
	)
}
