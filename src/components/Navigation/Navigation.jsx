import { NavLink, useLocation } from "react-router-dom";

export const Navigation = () => {
	const location = useLocation();
	return (
		<>
  		<NavLink to="/" className={(({isActive}) => isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
  		<NavLink state={{from: location}} to="/movies" className={(({isActive}) => isActive ? 'nav-link active' : 'nav-link')}>Movies</NavLink>
		</>
	)
}
