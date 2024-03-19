import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-apes.png';
import { useContext } from 'react';
import { AuthContext } from '../store/auth';

export default function Header() {
  const { isLoggedIn } = useContext(AuthContext);
  const navClassName = 'my-navlink';
  const activeClassName = 'my-navlink-active';
  return (
    <header className="flex justify-around items-center bg-lightest py-3">
      <Link to="/" className="w-20 h-20 border-2 border-dark rounded-full">
        <img src={logo} alt="investment compass" />
      </Link>
      <nav>
        <ul className="p-6 flex justify-center items-center gap-8">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : navClassName
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : navClassName
              }
              to="/courses"
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : navClassName
              }
              to="/events"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : navClassName
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      {isLoggedIn ? (
        <div className="my-flex">
          <Link to="/logout" className="my-btn-outline">
            Log Out
          </Link>
        </div>
      ) : (
        <div className="my-flex gap-2">
          <Link className="my-btn-outline" to="/login">
            Sign In
          </Link>
          <Link className="my-btn-outline" to="/register">
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}
