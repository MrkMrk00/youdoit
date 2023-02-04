import { Component, TextField } from '@contember/admin'
import { ImageField } from './ImageField'

export const User = Component(() => {
	return (
		<>
			<ImageField field="image" label="Image" />
			<TextField field="firstName" label="First name" />
			<TextField field="lastName" label="Last name" />
			<TextField field="email" label="Email" />
		</>
	)
})
