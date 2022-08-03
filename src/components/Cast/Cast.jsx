import { getCastMovies } from '../../axios/axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Style from '../../style/Cast.module.css'
const Cast = () => {
	const { moviesId } = useParams();

	const [ data, setDate ] = useState(null);
	useEffect(() => {
		getCastMovies(moviesId)
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
		<section>
			<h1>Cast</h1>
			<ul>
				{data?.cast.map(({name, character, profile_path, id}) => <li key={id}>
					<img 
						className={Style.Image} 
						src={(profile_path) ? (`https://image.tmdb.org/t/p/w500${profile_path}`) 
						: ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1K1IGys8BoXeletxFk9cGAKOTa6NtUgz3Yg&usqp=CAU')} 
						alt={name} />
					<p>{name}</p>
					<p>{character}</p>
				</li>)}
			</ul>
		</section>
	)
}
export default Cast;