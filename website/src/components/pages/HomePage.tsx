import type { FunctionComponent } from 'react'
import type { CategoryLocaleResult } from '../../data/CategoryLocaleFragment'
import type { HomePageLocaleResult } from '../../data/HomePageLocaleFragment'
import type { RecipeLocaleResult } from '../../data/RecipeLocaleFragment'
import { categoriesChunk } from '../../utilities/categoriesChunk'
import { recipesChunk } from '../../utilities/recipesChunk'
import { CategoryTile } from '../CategoryTile'
import { Container } from '../Container'
import { RecipeCarousel } from '../RecipeCarousel'
import { RecommendedRecipes } from '../RecommendedRecipes'
import styles from './HomePage.module.sass'

export interface HomePageProps {
	homePage: HomePageLocaleResult
	recipes: RecipeLocaleResult[]
	categories: CategoryLocaleResult[]
}

export const HomePage: FunctionComponent<HomePageProps> = ({ homePage, recipes, categories }) => {
	const recipesGroups = recipesChunk(recipes, 8)

	const categoriesGroups = categoriesChunk(categories, 2)

	return (
		<Container>
			<div className={styles.wrapper}>
				<div>
					<div>{homePage.title}xxx</div>
				</div>
				{recipesGroups.map((group, index) => {
					const carousel = group.slice(0, 5)
					const recommendedRecipes = group.slice(5)
					return (
						<div className={styles.recipes} key={index}>
							{categoriesGroups[index] && <CategoryTile tile={categoriesGroups[index][0]} type="main" />}
							{carousel.length > 0 && <RecipeCarousel tiles={carousel} />}
							{categoriesGroups[index] && <CategoryTile tile={categoriesGroups[index][1]} type="withDescription" />}
							{recommendedRecipes.length > 0 && <RecommendedRecipes recipes={recommendedRecipes} />}
						</div>
					)
				})}
			</div>
		</Container>
	)
}
