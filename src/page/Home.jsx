
import { RenderList } from '../components/RenderList/RenderList'
export const Home = () => {

	return ( 
		<main>
			<h1>Trending today</h1>
			<ul>
				<RenderList  />
			</ul>
		</main>
	)
}