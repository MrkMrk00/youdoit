import type { FunctionComponent } from 'react'
import type { HomePageLocaleResult } from '../../data/HomePageLocaleFragment'
import type { RecipeResult } from '../../data/RecipeFragment'
import { Container } from '../Container'
import { RecipeCarousel } from '../RecipeCarousel'
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
				<RecipeCarousel tiles={recipes} />
			</div>
		</Container>
	)
}
