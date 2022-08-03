import { Link } from 'react-router-dom';

const image = 'https://c.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif'

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={image} alt="not found" style={{ width: 300 }} />

      <p className="my-3">Opsss! This page doesn&apos;t exist</p>

      <Link to="/" className="">
        Open home page
      </Link>
    </div>
  );
};
export default NotFound;