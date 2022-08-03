import { getRewiesMovies } from '../../axios/axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Reviews = () => {
	const { moviesId } = useParams();
	const [ data, setDate ] = useState(null);

	useEffect(() => {
		getRewiesMovies(moviesId)
		.then(res => {
			setDate(res)
		})
		.catch((err) => {
			console.log(err)
		})
	}, [moviesId])
	console.log(data?.results.length);

	return ( 
		<section>
			    <h1>Reviews</h1>
					{(data?.results.length > 0) ? 
					 	<ul>
							{data?.results.map(({author, content, id}) => {
								return 	<li key={id}>
									<h3>Author: {author}</h3>
									<p>{content}</p>
								</li>
							})}
					 	</ul> 
						: <p>We don't have reviews for this movie.</p>}
		</section>
	)
}
export default Reviews;
