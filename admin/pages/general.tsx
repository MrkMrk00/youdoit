import { Box, EditPage, TextField } from '@contember/admin'

export default () => (
	<EditPage
		entity="General(unique = One)"
		setOnCreate="(unique = One)"
		rendererProps={{
			title: 'General',
		}}
	>
		<Box heading="Webmanifest">
			<TextField field="name" label="Name" />
			<TextField field="shortName" label="Short name" />
		</Box>
	</EditPage>
)
