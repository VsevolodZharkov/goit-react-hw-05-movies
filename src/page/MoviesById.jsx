import { Link, Outlet, useParams } from "react-router-dom";
import { getDetailsMovies } from '../axios/axios'
import { useState, useEffect } from 'react';

export const MoviesById = () => {
	const { moviesId } = useParams();
	const [ data, setDate ] = useState(null);
	console.log(moviesId);
	console.log(data);

	useEffect(() => {
		getDetailsMovies(moviesId)
		.then(res => {
			console.log(res);
			setDate(res)
		})
		.catch((err) => {
			console.log(err)
		})
	}, [moviesId])
	

	return ( 
		<main>
			  <h1>MoviesById</h1>
				<button type="button">Go back</button>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
		</main>
	)
}