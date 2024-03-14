import TradingAppBanner from '../components/Banner/TradingAppBanner';
import CoursesShowcase from '../components/CoursesShowcase/CoursesShowcase';
import HeroSection from '../components/HeroSection/HeroSection';

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <CoursesShowcase />
        <TradingAppBanner />
      </div>
    </>
  );
}
