import { MultiEditPage, TextField } from '@contember/admin'

export default () => (
	<MultiEditPage entities="Locale" pageName="locales" rendererProps={{ title: 'Locales' }}>
		<TextField field="code" label="Code" />
		<TextField field="label" label="Label" />
	</MultiEditPage>
)
