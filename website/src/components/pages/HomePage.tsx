import type { FunctionComponent } from 'react'
import type { CategoryLocaleResult } from '../../data/CategoryLocaleFragment'
import type { HomePageLocaleResult } from '../../data/HomePageLocaleFragment'
import type { RecipeResult } from '../../data/RecipeFragment'
import { recipesChunk } from '../../utilities/recipesChunk'
import { CategoryTile } from '../CategoryTile'
import { Container } from '../Container'
import { RecipeCarousel } from '../RecipeCarousel'
import { RecipeTile } from '../RecipeTile'
import { RecommendedRecipes } from '../RecommendedRecipes'
import styles from './HomePage.module.sass'

export interface HomePageProps {
	homePage: HomePageLocaleResult
	recipes: RecipeResult[]
	categories: CategoryLocaleResult[]
}

export const HomePage: FunctionComponent<HomePageProps> = ({ homePage, recipes, categories }) => {
	const recipesGroups = recipesChunk(recipes, 10)

	console.log(categories)

	return (
		<Container>
			<div className={styles.wrapper}>
				<div>
					<div>{homePage.title}</div>
				</div>
				{categories[0] && <CategoryTile tile={categories[0]} type="main" />}
				{categories[0] && <CategoryTile tile={categories[0]} type="withDescription" />}
				{recipesGroups.map((group, index) => {
					const main = group.at(0)
					const carousel = group.slice(1, 6)
					const withDescription = group.at(6)
					const recommendedRecipes = group.slice(7)

					return (
						<div className={styles.recipes} key={index}>
							{main && <RecipeTile tile={main} type="main" />}
							{carousel.length > 0 && <RecipeCarousel tiles={carousel} />}
							{withDescription && <RecipeTile tile={withDescription} type="withDescription" />}
							{recommendedRecipes.length > 0 && <RecommendedRecipes recipes={recommendedRecipes} />}
						</div>
					)
				})}
			</div>
		</Container>
	)
}
