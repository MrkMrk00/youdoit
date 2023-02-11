import { EditPage, NavigateBackButton } from '@contember/admin'
import { User } from '../components/User'

export default () => (
	<EditPage
		entity="User(id=$id)"
		rendererProps={{ title: 'Edit user', navigation: <NavigateBackButton to="userList">Users</NavigateBackButton> }}
	>
		<User />
	</EditPage>
)
