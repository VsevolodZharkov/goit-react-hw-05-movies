import { getPopMovies } from '../axios/axios'

export const Home = () => {
	const PopMovies = getPopMovies();
	console.log(PopMovies);
	return ( 
		<main>
			<h1>Trending today</h1>
			<ul>
				<li>
					Movies
				</li>
			</ul>
		</main>
	)
}