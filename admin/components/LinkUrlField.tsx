import { Component, SlugField, SlugFieldProps } from '@contember/admin'

export interface LinkUrlFieldProps extends Partial<SlugFieldProps> {
	derivedFrom: SlugFieldProps['derivedFrom']
	hardPrefix?: string
	softPrefix?: string
	label?: string
}

export const LinkUrlField = Component<LinkUrlFieldProps>(
	({ softPrefix, hardPrefix, derivedFrom, label = 'URL', ...props }) => (
		<SlugField
			field="link.url"
			derivedFrom={derivedFrom}
			label={label}
			unpersistedHardPrefix={environment => environment.getVariableOrElse('WEB_URL', '')}
			persistedHardPrefix={hardPrefix ?? '/'}
			persistedSoftPrefix={softPrefix}
			{...props}
		/>
	),
	'LinkUrlField',
)
