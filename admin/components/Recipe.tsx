import { Component, DateTimeField, Field, Repeater, RichTextField, SelectField, TextField } from '@contember/admin'
import { ImageField } from './ImageField'
import { LocaleSideDimension } from './LocaleSideDimensions'
import { StepGroup } from './StepGroup'

export const Recipe = Component((_, enviroment) => {
	console.log(enviroment)
	return (
		<>
			<SelectField
				field="createdBy"
				label="Created by"
				options="User"
				renderOption={(accessor) => {
					const firstName = accessor.getField('firstName').value
					const lastName = accessor.getField('lastName').value

					return firstName + ' ' + lastName
				}}
				optionsStaticRender={
					<>
						<Field field="firstName" />
						<Field field="lastName" />
					</>
				}
			/>
			<DateTimeField field="publishDate" label="Publish date" />
			<TextField field="price" label="Price" />
			<ImageField field="mainImage" label="Main image" />
			<LocaleSideDimension>
				<TextField field="title" label="Title" />
				<RichTextField field="description" label="Description" />
			</LocaleSideDimension>
			<Repeater field="stepsGroups" label="Step groups" sortableBy="order">
				<StepGroup />
			</Repeater>
		</>
	)
})
