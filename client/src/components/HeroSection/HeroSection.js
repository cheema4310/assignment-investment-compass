import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="p-12 bg-lightest w-full h-[75vh] grid grid-cols-5 gap-6">
        <div className="col-span-3 flex flex-col items-end justify-center gap-4">
          <h2 className="my-heading text-end">
            Empowering Indians for Financial Freedom
          </h2>
          <p className="my-para text-end">
            we're dedicated to empowering Indians with the knowledge and skills
            for financial freedom through stock market education on Trading and
            Investment
          </p>
          <Link to="free-class" className="my-btn">
            Book Free Class
          </Link>
        </div>
        <div className="bg-hero-section bg-cover col-span-2 rounded-xl shadow-2xl"></div>
      </div>
    </section>
  );
}
