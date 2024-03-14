import youtubeSVG from '../assets/social-icons/youtube.svg';
import instaSVG from '../assets/social-icons/insta.svg';
import linkedSVG from '../assets/social-icons/Linked.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <section id="footer">
      <div className="flex items-center justify-around">
        <div className="">
          <h4>FIND US</h4>
          <a href="mailto:support@investmentcompass.in">
            support@investmentcompass.in
          </a>
          <div className="flex">
            <img className="w-8 h-8" src={youtubeSVG} alt="social icon" />
            <img className="w-8 h-8" src={instaSVG} alt="social icon" />
            <img className="w-8 h-8" src={linkedSVG} alt="social icon" />
          </div>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/courses">Have a Question?</Link>
            </li>
            <li>
              <Link to="/courses">Our Courses</Link>
            </li>
            <li>
              <Link to="/events">All Events</Link>
            </li>
            <li>
              <Link to="/events">About Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Don't Miss Out!</h4>
          <form>
            <input type="email" placeholder="Email Address" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
