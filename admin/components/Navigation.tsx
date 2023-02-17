import { Menu } from '@contember/admin'

export const Navigation = () => (
	<Menu>
		<Menu.Item>
			<Menu.Item title="Home page" to="homePage" />
			<Menu.Item title="Users" to="userList" />
			<Menu.Item title="Recipes" to="recipeList" />
			<Menu.Item title="Categories" to="categoryList" />
			<Menu.Item title="Settings">
				<Menu.Item title="Locales" to="localesPage" />
			</Menu.Item>
		</Menu.Item>
	</Menu>
)
