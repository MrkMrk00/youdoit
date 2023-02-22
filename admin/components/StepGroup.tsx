import { Component, Repeater, RichTextField, TextField } from '@contember/admin'
import { LocaleSideDimension } from './LocaleSideDimensions'
import { StepGroupItem } from './StepGroupItem'

export const StepGroup = Component(() => {
	return (
		<>
			<LocaleSideDimension>
				<TextField field="title" label="Title" />
				<RichTextField field="description" label="Description" />
				<TextField field="buttonTitle" label="Button title" />
			</LocaleSideDimension>
			<Repeater field="items" label="Steps" sortableBy="order">
				<StepGroupItem />
			</Repeater>
		</>
	)
})
