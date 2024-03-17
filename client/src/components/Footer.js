import youtubeSVG from '../assets/social-icons/youtube.svg';
import instaSVG from '../assets/social-icons/insta.svg';
import linkedSVG from '../assets/social-icons/Linked.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <section id="footer">
      <div className="flex items-center justify-around p-12 bg-darker text-lighter">
        <div className="flex-1 flex flex-col items-end gap-2">
          <h4 className="my-heading text-lightest">Connect with us</h4>
          <a className="my-para" href="mailto:support@investmentcompass.in">
            support@investmentcompass.in
          </a>
          <div className="my-flex gap-4 pt-4">
            <a href="https://www.youtube.com/@TheInvestmentCompass">
              <img
                className="my-social-icon"
                src={youtubeSVG}
                alt="social icon"
              />
            </a>
            <a href="https://www.instagram.com/theinvestmentcompass/">
              <img
                className="my-social-icon"
                src={instaSVG}
                alt="social icon"
              />
            </a>
            <a href="https://www.linkedin.com/company/theinvestmentcompass/about/">
              <img
                className="my-social-icon"
                src={linkedSVG}
                alt="social icon"
              />
            </a>
          </div>
        </div>
        <div className="flex-1">
          <ul className="flex flex-col items-center">
            <li className="my-link">
              <Link to="/courses">Have a Question?</Link>
            </li>
            <li className="my-link">
              <Link to="/courses">Our Courses</Link>
            </li>
            <li className="my-link">
              <Link to="/events">All Events</Link>
            </li>
            <li className="my-link">
              <Link to="/events">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="my-heading-normal py-2">Ready to Learn?</h4>
          <form className="flex flex-col items-center gap-4">
            <input
              className="my-input"
              type="email"
              placeholder="Email Address"
            />
            <button className="my-btn-light w-full" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
