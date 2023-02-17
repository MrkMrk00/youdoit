import { EditPage, NavigateBackButton } from '@contember/admin'
import { Category } from '../components/Category'

export default () => (
	<EditPage
		entity="Category(id=$id)"
		rendererProps={{
			title: 'Edit category',
			navigation: <NavigateBackButton to="categoryList">Categories</NavigateBackButton>,
		}}
	>
		<Category />
	</EditPage>
)
