import { Component, Repeater, TextField } from '@contember/admin'
import { LocaleSideDimension } from './LocaleSideDimensions'
import { Step } from './Step'

export const StepGroup = Component(() => {
	return (
		<>
			<LocaleSideDimension>
				<TextField field="title" label="Title" />
				<TextField field="buttonTitle" label="Button title" />
			</LocaleSideDimension>
			<Repeater field="steps" label="Steps" sortableBy="order">
				<Step />
			</Repeater>
		</>
	)
})
