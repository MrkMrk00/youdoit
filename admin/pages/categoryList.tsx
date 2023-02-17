import {
	DataGridPage,
	DeleteEntityButton,
	GenericCell,
	LinkButton,
	TextCell,
	useCurrentRequest,
} from '@contember/admin'

export default () => {
	const request = useCurrentRequest()

	return (
		<DataGridPage
			entities="Category"
			itemsPerPage={50}
			rendererProps={{ title: 'Category', actions: <LinkButton to="categoryCreate">Add a new category</LinkButton> }}
		>
			{request?.dimensions.locale.map((localeCode) => (
				<TextCell field={`locales(locale.code = '${localeCode}').title`} />
			))}
			<GenericCell shrunk>
				<LinkButton to="categoryEdit(id: $entity.id)">Edit</LinkButton>
			</GenericCell>
			<GenericCell canBeHidden={false} justification="justifyEnd" shrunk>
				<DeleteEntityButton immediatePersist />
			</GenericCell>
		</DataGridPage>
	)
}
