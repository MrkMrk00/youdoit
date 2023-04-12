import type { FunctionComponent, ReactNode } from 'react'
import { createContext } from 'react'

export const TranslationsContext = createContext<{ translationsEntries: { [key: string]: string } }>({
	translationsEntries: {},
})

export const TranslationsProvider: FunctionComponent<{
	translationsEntries: { [key: string]: string }
	children: ReactNode
}> = ({ translationsEntries, children }) => {
	return <TranslationsContext.Provider value={{ translationsEntries }}>{children}</TranslationsContext.Provider>
}
