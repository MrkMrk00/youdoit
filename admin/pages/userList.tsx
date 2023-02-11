import { DataGridPage, DeleteEntityButton, GenericCell, LinkButton, TextCell } from '@contember/admin'

export default () => {
	return (
		<DataGridPage
			entities="User"
			itemsPerPage={50}
			rendererProps={{ title: 'User', actions: <LinkButton to="userCreate">Add a new user</LinkButton> }}
		>
			<TextCell field="lastName" />
			<GenericCell shrunk>
				<LinkButton to="userEdit(id: $entity.id)">Edit</LinkButton>
			</GenericCell>
			<GenericCell canBeHidden={false} justification="justifyEnd" shrunk>
				<DeleteEntityButton immediatePersist />
			</GenericCell>
		</DataGridPage>
	)
}
