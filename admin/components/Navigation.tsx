import { Menu } from '@contember/admin'

export const Navigation = () => (
	<Menu>
		<Menu.Item>
			<Menu.Item title="General" to="general" />
			<Menu.Item title="Recipes" to="recipeList" />
			<Menu.Item title="Settings">
				<Menu.Item title="Locales" to="localesPage" />
			</Menu.Item>
		</Menu.Item>
	</Menu>
)
