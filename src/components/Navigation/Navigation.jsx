import { NavLink } from "react-router-dom";

export const Navigation = () => {

	return (
		<>
  		<NavLink to="/" className={(({isActive}) => isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
  		<NavLink to="/movies" className={(({isActive}) => isActive ? 'nav-link active' : 'nav-link')}>Movies</NavLink>
		</>
	)
}
