import { MultiEditPage, Repeater, SelectField, TextField } from '@contember/admin'

export default () => {
	return (
		<MultiEditPage
			entities="TranslationsEntry"
			rendererProps={{
				title: 'Translations',
				sortableBy: 'order',
			}}
		>
			<TextField field="key" label="Key" labelPosition="labelInlineLeft" />
			<Repeater field="values" label="Values" sortableBy="order">
				<SelectField field="locale" label="Locale" options="Locale.label" />
				<TextField field="value" label="Value" />
			</Repeater>
		</MultiEditPage>
	)
}
