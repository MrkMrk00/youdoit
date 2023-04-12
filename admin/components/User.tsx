import { Component, SlugField, TextField } from '@contember/admin'
import { ImageField } from './ImageField'

export const User = Component(() => {
	return (
		<>
			<SlugField derivedFrom="lastName" field="link" label="Link" persistedHardPrefix="/" />
			<ImageField field="image" label="Image" />
			<TextField field="firstName" label="First name" />
			<TextField field="lastName" label="Last name" />
			<TextField field="email" label="Email" />
		</>
	)
})
