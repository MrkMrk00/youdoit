import { Component, RichTextField, TextField } from '@contember/admin'
import { ImageField } from './ImageField'
import { LinkUrlField } from './LinkUrlField'
import { LocaleSideDimension } from './LocaleSideDimensions'
import { SeoField } from './SeoField'

export const Category = Component(() => {
	return (
		<>
			<ImageField field="image" label="Image" />
			<LocaleSideDimension>
				<LinkUrlField derivedFrom="title" />
				<TextField field="title" label="Title" />
				<RichTextField field="description" label="Desctription" />
				<SeoField field="seo" />
			</LocaleSideDimension>
		</>
	)
})
