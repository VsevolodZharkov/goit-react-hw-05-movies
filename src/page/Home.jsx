import { getPopMovies } from '../axios/axios'
import { RenderList } from '../components/RenderList/RenderList'
export const Home = () => {
	let PopMovies = getPopMovies()
	console.log(PopMovies);
	// console.log(PopMovies.then(data => console.log(data.results)));
	return ( 
		<main>
			<h1>Trending today</h1>
			<ul>
				<RenderList data={PopMovies}/>
			</ul>
		</main>
	)
}