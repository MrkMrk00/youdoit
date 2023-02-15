import type { FunctionComponent } from 'react'
import type { HomePageLocaleResult } from '../../data/HomePageLocaleFragment'

export interface HomePageProps {
	homePage: HomePageLocaleResult
}

export const HomePage: FunctionComponent<HomePageProps> = ({ homePage }) => {
	console.log(homePage)
	return (
		<div>
			<div>
				<div>Home page</div>
			</div>
		</div>
	)
}
