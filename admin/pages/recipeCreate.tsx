import { CreatePage, NavigateBackButton } from '@contember/admin'
import { Recipe } from '../components/Recipe'

export default () => (
	<CreatePage
		entity="Recipe"
		rendererProps={{
			title: 'Add a new recipe',
			navigation: <NavigateBackButton to="recipelist">Recipes</NavigateBackButton>,
		}}
		redirectOnSuccess="recipeEdit(id: $entity.id)"
		orderField="order"
		newOrderFieldValue={0}
	>
		<Recipe />
	</CreatePage>
)
