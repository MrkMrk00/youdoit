import { Component, SlugField, TextField } from '@contember/admin'
import { ImageField } from './ImageField'
import { SeoField } from './SeoField'

export const User = Component(() => {
	return (
		<>
			<SlugField derivedFrom="lastName" field="link.url" label="Link" persistedHardPrefix="/" />
			<ImageField field="image" label="Image" />
			<TextField field="firstName" label="First name" />
			<TextField field="lastName" label="Last name" />
			<TextField field="email" label="Email" />
			<SeoField field="seo" />
		</>
	)
})
