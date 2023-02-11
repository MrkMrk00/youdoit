import { EditPage, NavigateBackButton } from '@contember/admin'
import { Recipe } from '../components/Recipe'

export default () => (
	<EditPage
		entity="Recipe(id=$id)"
		rendererProps={{
			title: 'Edit recipe',
			navigation: <NavigateBackButton to="recipeList">Recipes</NavigateBackButton>,
		}}
	>
		<Recipe />
	</EditPage>
)
