import { CreatePage, NavigateBackButton } from '@contember/admin'
import { User } from '../components/User'

export default () => (
	<CreatePage
		entity="User"
		rendererProps={{
			title: 'Add a new user',
			navigation: <NavigateBackButton to="userList">Users</NavigateBackButton>,
		}}
		redirectOnSuccess="userEdit(id: $entity.id)"
	>
		<User />
	</CreatePage>
)
