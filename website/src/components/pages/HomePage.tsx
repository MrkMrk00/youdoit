import type { FunctionComponent } from 'react'
import type { HomePageLocaleResult } from '../../data/HomePageLocaleFragment'
import type { RecipeResult } from '../../data/RecipeFragment'
import { Container } from '../Container'
import { RecipeCarousel } from '../RecipeCarousel'
import { RecipeTile } from '../RecipeTile'
import { RecipeTileWithDescription } from '../RecipeTileWithDescription'
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
					<RecipeTile tile={mainRecipe} type="main" />
					<RecipeCarousel tiles={otherRecipes} />
					<RecipeTileWithDescription tile={mainRecipe} />
				</div>
			</div>
		</Container>
	)
}
