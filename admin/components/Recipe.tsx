import { Component, DateTimeField, TextField } from '@contember/admin'

export const Recipe = Component(() => {
	return (
		<>
			<DateTimeField field="publishDate" label="Publish date" />
			<TextField field="price" label="Price" />
			{/* <LocaleSideDimension>
				<TextField field="title" label="Title" />
				<RichTextField field="description" label="Description" />
			</LocaleSideDimension> */}
		</>
	)
})
