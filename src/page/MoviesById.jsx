import { Link, Outlet, useParams } from "react-router-dom";
import { getDetailsMovies } from '../axios/axios'
import { useState, useEffect } from 'react';
import  Style  from '../style/MoviesById.module.css'
export const MoviesById = () => {
	const { moviesId } = useParams();
	const [ data, setDate ] = useState(null);

	useEffect(() => {
		getDetailsMovies(moviesId)
		.then(res => {
			if(!res) {
				return 
			}
			setDate(res)
		})
		.catch((err) => {
			console.log(err)
		})
	}, [moviesId])
	console.log(data);
	return ( 
		<main>
			  <h1>MoviesById</h1>
				<Link to='/'>Go back</Link>
			<div>
				<img className={Style.Image} 
				src={!data?.poster_path ? 
					('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1K1IGys8BoXeletxFk9cGAKOTa6NtUgz3Yg&usqp=CAU') 
				: (`https://image.tmdb.org/t/p/w500${data?.poster_path}`)} 
				alt={data?.title}/>
				<h2>{data?.title}</h2>
				<p>User score: {data?.vote_average}</p>
				<h2>Overview</h2>
				<p>{data?.overview}</p>
				<p>Ganres</p>
				<p>{data?.genres.map((el) => el.name).join(', ')}</p>
			</div>
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