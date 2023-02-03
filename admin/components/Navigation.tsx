import { Menu } from '@contember/admin'

export const Navigation = () => (
	<Menu>
		<Menu.Item>
			<Menu.Item title="General" to="general" />
			<Menu.Item title="Generic pages" to="genericPage/list" />
			<Menu.Item title="Redirects" to="redirect/list" />
		</Menu.Item>
	</Menu>
)
