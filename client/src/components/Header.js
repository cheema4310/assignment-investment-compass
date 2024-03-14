import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-apes.png';

export default function Header() {
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
    </header>
  );
}
