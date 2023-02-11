import { Component, DateTimeField, Repeater, RichTextField, TextField } from '@contember/admin'
import { ImageField } from './ImageField'
import { LocaleSideDimension } from './LocaleSideDimensions'
import { StepGroup } from './StepGroup'

export const Recipe = Component(() => {
	return (
		<>
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
