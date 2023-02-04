import { Component, DateTimeField, RichTextField, TextField } from '@contember/admin'
import { ImageField, LocaleSideDimension } from '@mangoweb/contember-plugins'

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
		</>
	)
})
