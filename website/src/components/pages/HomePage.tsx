import type { FunctionComponent } from 'react'
import type { HomePageLocaleResult } from '../../data/HomePageLocaleFragment'
import type { RecipeResult } from '../../data/RecipeFragment'
import { Container } from '../Container'
import { MainRecipe } from '../MainRecipe'
import { RecipeCarousel } from '../RecipeCarousel'
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
				<MainRecipe recipe={mainRecipe} />
				<RecipeCarousel tiles={otherRecipes} />
			</div>
		</Container>
	)
}
