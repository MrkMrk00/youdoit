import { Component, Repeater, TextField } from '@contember/admin'
import { LocaleSideDimension } from './LocaleSideDimensions'
import { StepGroupItem } from './StepGroupItem'

export const StepGroup = Component(() => {
	return (
		<>
			<LocaleSideDimension>
				<TextField field="title" label="Title" />
				<TextField field="buttonTitle" label="Button title" />
			</LocaleSideDimension>
			<Repeater field="items" label="Steps" sortableBy="order">
				<StepGroupItem />
			</Repeater>
		</>
	)
})
