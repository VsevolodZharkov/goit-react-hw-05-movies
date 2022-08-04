import { Link, useLocation } from "react-router-dom";

export const ButtonBack = () => {
	const location = useLocation();
	return (
		<>
			<Link to={ location?.state?.from ??  '/'}>Back</Link>
		</>
	)
}