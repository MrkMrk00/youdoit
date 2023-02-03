import { DataGridPage, DeleteEntityButton, GenericCell, LinkButton, useCurrentRequest } from '@contember/admin'

export default () => {
	const request = useCurrentRequest()

	return (
		<DataGridPage
			entities="Recipe"
			itemsPerPage={50}
			rendererProps={{ title: 'Repice', actions: <LinkButton to="recipeCreate">Add a new recipe</LinkButton> }}
		>
			<GenericCell shrunk>
				<LinkButton to="recipeEdit(id: $entity.id)">Edit</LinkButton>
			</GenericCell>
			<GenericCell canBeHidden={false} justification="justifyEnd" shrunk>
				<DeleteEntityButton immediatePersist />
			</GenericCell>
		</DataGridPage>
	)
}
