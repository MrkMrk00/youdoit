import { EditPage, TextField } from '@contember/admin'

export default () => (
	<EditPage
		entity="General(unique = One)"
		setOnCreate="(unique = One)"
		rendererProps={{
			title: 'General',
		}}
	>
		<TextField field="dummy" label="Dummy text" />
		{/* <ImageField field="image" label="Dummy image" /> */}

		{/* <SeoField field="seo" /> */}
	</EditPage>
)
