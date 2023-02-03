import { TextField } from '@contember/admin'
import { ImageField } from '@mangoweb/contember-plugins'
import type { Blocks } from './blockHelpers'

// Add all blocks here
export const blocks = {
	image: {
		title: 'Image',
		blueprintIcon: 'media',
		form: <ImageField field="image" label={undefined} />,
	},
	linkables: {
		title: 'Linkables',
		blueprintIcon: 'properties',
		form: (
			<>
				This is an example block. Remove it in production.
				<TextField field="primaryText" label="Title" />
			</>
		),
	},
} as const satisfies Blocks
