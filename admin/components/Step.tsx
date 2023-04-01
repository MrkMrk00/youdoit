import { Box, CheckboxField, Component, HasOne, NumberField, TextField } from '@contember/admin'
import { LocaleSideDimension } from './LocaleSideDimensions'

interface StepProps {
	field: string
}

export const Step = Component<StepProps>((props) => {
	return (
		<HasOne field={props.field}>
			<LocaleSideDimension>
				<TextField field="title" label="Title" />
			</LocaleSideDimension>
			<Box heading="Timer">
				<CheckboxField field="hasTimer" label="Has timer" />
				<NumberField field="timerCount" label="Timer count" labelDescription="Type time in seconds" />
			</Box>
		</HasOne>
	)
})
