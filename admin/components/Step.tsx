import { Component, TextField } from '@contember/admin'
import { LocaleSideDimension } from './LocaleSideDimensions'

export const Step = Component(() => {
	return (
		<LocaleSideDimension>
			<TextField field="title" label="Title" />
		</LocaleSideDimension>
	)
})
