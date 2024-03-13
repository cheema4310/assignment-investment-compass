import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="">
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
