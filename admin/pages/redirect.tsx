import { MultiEditPage, TextField } from '@contember/admin'
import { LinkField } from '@mangoweb/contember-plugins'

export const list = (
	<MultiEditPage
		entities="Redirect"
		rendererProps={{
			title: 'Redirects',
			enableAddingNew: true,
			enableRemoving: true,
		}}
	>
		<TextField field="link.url" label="From URL" />
		<LinkField field="target" titleField={false} label="To URL" />
	</MultiEditPage>
)
