import { getRewiesMovies } from '../../axios/axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Style from '../../style/Cast.module.css'
export const Reviews = () => {
	const { moviesId } = useParams();
	const [ data, setDate ] = useState(null);

	useEffect(() => {
		getRewiesMovies(moviesId)
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
	console.log(data?.results);

	return ( 
		<section>
			    <h1>Reviews</h1>
					{(data?.results) ? 
					 	(<ul>
							{data?.results.map(({author, content, id}) => {
								return 	<li key={id}>
									<h3>Author: {author}</h3>
									<p>{content}</p>
								</li>
							})}
					 	</ul>) 
						: (<p>We don't have reviews for this movie.</p>) 
					}
		</section>
	)
}