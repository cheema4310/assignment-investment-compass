import { Link } from 'react-router-dom';
import logo from '../assets/logo-apes.png';

export default function Header() {
  return (
    <header className="flex justify-around items-center bg-lightest">
      <Link to="/" className="w-20 h-20 border-2 border-dark rounded-full">
        <img src={logo} alt="investment compass" />
      </Link>
      <nav>
        <ul className="p-6 flex justify-center items-center gap-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
