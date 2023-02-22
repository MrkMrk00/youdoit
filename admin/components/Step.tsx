import { Component, HasOne, TextField } from '@contember/admin'
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
		</HasOne>
	)
})
