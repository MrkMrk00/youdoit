import type { FunctionComponent } from 'react'
import type { HomePageLocaleResult } from '../../data/HomePageLocaleFragment'
import type { RecipeResult } from '../../data/RecipeFragment'
import { Container } from '../Container'
import { RecipeCarousel } from '../RecipeCarousel'
import { RecipeTile } from '../RecipeTile'
import styles from './HomePage.module.sass'

export interface HomePageProps {
	homePage: HomePageLocaleResult
	recipes: RecipeResult[]
}

export const HomePage: FunctionComponent<HomePageProps> = ({ homePage, recipes }) => {
	const [mainRecipe, ...otherRecipes] = recipes

	return (
		<Container>
			<div className={styles.wrapper}>
				<div>
					<div>{homePage.title}</div>
				</div>
				<div className={styles.recipes}>
					<RecipeTile tile={recipes[1]} type="main" />
					<RecipeCarousel tiles={otherRecipes} />
					<RecipeTile tile={mainRecipe} type="withDescription" />
				</div>
			</div>
		</Container>
	)
}
