import { Component, RichTextField, TextField } from '@contember/admin'
import { LinkUrlField } from './LinkUrlField'
import { LocaleSideDimension } from './LocaleSideDimensions'
import { SeoField } from './SeoField'

export const Category = Component(() => {
	return (
		<>
			<LocaleSideDimension>
				<LinkUrlField derivedFrom="title" />
				<TextField field="title" label="Title" />
				<RichTextField field="description" label="Desctription" />
				<SeoField field="seo" />
			</LocaleSideDimension>
		</>
	)
})
