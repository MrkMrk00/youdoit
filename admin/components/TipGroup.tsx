import { Component, Repeater, RichTextField, TextField } from '@contember/admin'
import { LocaleSideDimension } from './LocaleSideDimensions'
import { Tip } from './Tip'

export const TipGroup = Component(() => {
	return (
		<>
			<LocaleSideDimension>
				<TextField field="title" label="Title" />
				<RichTextField field="description" label="Description" />
			</LocaleSideDimension>
			<Repeater field="items" label="Tips" sortableBy="order">
				<Tip field="tip" />
			</Repeater>
		</>
	)
})
