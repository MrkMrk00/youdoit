import { Component, HasOne, TextField } from '@contember/admin'
import { LocaleSideDimension } from './LocaleSideDimensions'

interface TipProps {
	field: string
}

export const Tip = Component<TipProps>((props) => {
	return (
		<HasOne field={props.field}>
			<LocaleSideDimension>
				<TextField field="title" label="Title" />
			</LocaleSideDimension>
		</HasOne>
	)
})
