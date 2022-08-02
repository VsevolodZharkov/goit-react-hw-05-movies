// import { useState } from 'react';
// import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';
import Style from '../style/Movies.module.css'
export const Movies = () => {
	// const [query, setQuery] = useState('')

	// const clearQuery = () => {
	// 	setQuery('');
	// 	document.getElementById('form').reset();
	// }

	// const handeleChange = event => {
	// 	setQuery(event.target.value)
	// }

	// const handelSubmit = event => {
	// 	event.preventDefault();
	// 	if(query.trim() === ''){
	// 		toast.error('Fill input')
	// 		return 
	// 	}
	// 	onSubmit(query)
	// 	clearQuery()
	// }
	return ( 
		<main className={Style.MoviesBar}>
			<form className={Style.MoviesForm} id='form'>
          <button
            type="submit"
            className={Style.MoviesFormButton}
            // onClick=""//{handelSubmit}
          >
            <span className={Style.MoviesFormButtonLabel}>Search</span>
          </button>

          <input
						// onChange=""//{handeleChange}
            className={Style.MoviesFormInput}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
		</main>
	)
}