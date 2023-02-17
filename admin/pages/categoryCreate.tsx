import { CreatePage, NavigateBackButton } from '@contember/admin'
import { Category } from '../components/Category'
export default () => {
	return (
		<CreatePage
			entity="Category"
			rendererProps={{
				title: 'Add a new category',
				navigation: <NavigateBackButton to="categorylist">Categories</NavigateBackButton>,
			}}
			redirectOnSuccess="categoryEdit(id: $entity.id)"
			orderField="order"
			newOrderFieldValue={0}
		>
			<Category />
		</CreatePage>
	)
}
