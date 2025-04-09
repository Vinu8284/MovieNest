import { Link } from 'react-router-dom';
import Search from './Search';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        MovieNest
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Popular
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/top-rated" className="navbar-link">
              Top Rated
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/upcoming" className="navbar-link">
              Upcoming
            </Link>
          </li>
        </ul>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;