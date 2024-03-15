import { Link } from 'react-router-dom';

import fyersImg from '../../assets/banner/fyers.jpg';
import zerodhaImg from '../../assets/banner/zerodha.png';
import dhanImg from '../../assets/banner/dhan.jpg';
import deltaImg from '../../assets/banner/delta-exchange.jpg';

const Dummy_Banner_Data = [
  { id: '01', image: fyersImg, link: 'https://signup.fyers.in/' },
  { id: '02', image: zerodhaImg, link: 'https://zerodha.com/' },
  { id: '03', image: dhanImg, link: 'https://join.dhan.co/' },
  { id: '04', image: deltaImg, link: 'https://www.delta.exchange/' },
];

export default function TradingAppBanner() {
  const BannerCard = ({ data }) => {
    return (
      <div className="flex flex-col items-center gap-4">
        <img
          className="h-[35vh] w-56 rounded-lg shadow-2xl"
          src={data.image}
          alt="banner"
        />
        <Link className="my-btn" to={data.link}>
          Download Now
        </Link>
      </div>
    );
  };
  return (
    <section id="banner">
      <div className="flex flex-col bg-lightest py-20">
        <div className="py-12">
          <h2 className="my-heading text-center">
            Download Trading app from us for Free
          </h2>
          <p className="my-para py-4 text-center w-1/3 mx-auto">
            Create your trading app with us and get free class and doubt solving
            for life time. This is the ticket for our members group
          </p>
        </div>
        <div className="my-flex gap-12">
          {Dummy_Banner_Data.map((data) => (
            <BannerCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
