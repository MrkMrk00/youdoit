import type { FunctionComponent } from 'react'
import { Fragment } from 'react'
import type { HomePageLocaleResult } from '../../data/HomePageLocaleFragment'
import type { RecipeResult } from '../../data/RecipeFragment'
import { Container } from '../Container'
import { RecipeTile } from '../RecipeTile'
import styles from './HomePage.module.sass'

export interface HomePageProps {
	homePage: HomePageLocaleResult
	recipes: RecipeResult[]
}

export const HomePage: FunctionComponent<HomePageProps> = ({ homePage, recipes }) => {
	return (
		<Container>
			<div className={styles.wrapper}>
				<div>
					<div>{homePage.title}</div>
				</div>

				<div className={styles.recipeList}>
					{recipes.map((recipe) => {
						return (
							<Fragment key={recipe.id}>
								<RecipeTile tile={recipe} />
							</Fragment>
						)
					})}
				</div>
			</div>
		</Container>
	)
}
