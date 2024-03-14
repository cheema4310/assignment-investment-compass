import EventsList from '../components/EventsShowcase/EventsList';

export default function Events() {
  return (
    <div className="bg-lightest">
      <div className="py-12">
        <h2 className="py-2 my-heading text-center">Upcoming Events</h2>
        <p className="font-para text-sm font-medium text-center">
          Register for upcoming events
        </p>
        <div className="py-12">
          <EventsList />
        </div>
      </div>
    </div>
  );
}
