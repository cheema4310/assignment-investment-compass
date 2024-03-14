import EventCard from './EventCard';

const Dummy_Events_Data = [
  {
    id: '01',
    eventTitle: 'Forex Trading Masterclass',
    eventDesc:
      'Dive deep into the world of forex trading with our comprehensive masterclass. Learn about market analysis, strategies, risk management, and more from seasoned traders.',
    date: 'April 20, 2024',
    time: '9:00 AM - 1:00 PM (IST)',
  },
  {
    id: '02',
    eventTitle: 'Workshop: Crypto Trading Strategies',
    eventDesc:
      'Explore the dynamic landscape of cryptocurrency trading in this interactive workshop. Discover effective trading strategies, understand market trends, and unlock the potential of digital assets.',
    date: 'May 5, 2024',
    time: '2:00 PM - 5:00 PM (IST)',
  },
  {
    id: '03',
    eventTitle: 'Group Study: Algorithmic Trading',
    eventDesc:
      'Delve into the realm of algorithmic trading and automation. Learn how to code trading algorithms, backtest strategies, and harness the power of technology to enhance your trading performance.',
    date: 'May 15, 2024',
    time: '10:00 AM - 12:00 PM (IST)',
  },
  {
    id: '04',
    eventTitle: 'Webinar: Trading Psychology',
    eventDesc:
      'Gain insights into the psychological aspects of trading and develop a mindset for success. Understand emotions, biases, and decision-making processes that impact trading outcomes.',
    date: 'June 1, 2024',
    time: '6:00 PM - 8:00 PM (IST)',
  },
  {
    id: '05',
    eventTitle: 'Bootcamp: Options Trading',
    eventDesc:
      'Join our intensive bootcamp to learn about options trading strategies, risk management techniques, and practical applications in the financial markets.',
    date: 'June 10, 2024',
    time: '8:00 AM - 4:00 PM (IST)',
  },
];

export default function EventsList() {
  return (
    <div className="my-flex flex-wrap gap-4">
      {Dummy_Events_Data.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
