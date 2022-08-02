import { NavLink } from "react-router-dom";

export const Navigation = () => {
	return (
		<>
  		<NavLink to="/">Home</NavLink>
  		<NavLink to="/about">About</NavLink>
  		<NavLink to="/products">Products</NavLink>
		</>
	)
}

// export { Header as default };