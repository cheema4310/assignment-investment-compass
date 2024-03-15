export default function EventCard({ event }) {
  const { id, eventTitle, eventDesc, date, time } = event;
  const modifyEventTitle =
    eventTitle.length < 26 ? eventTitle : eventTitle.substring(0, 25) + ' ...';
  const modifyEventDesc =
    eventDesc.length < 150 ? eventDesc : eventDesc.substring(0, 150) + ' ...';

  const handleClick = () => {
    // Redirect to "/register-event?id=02"
  };
  return (
    <div className="px-4 py-6 basis-1/4 bg-lighter text-darkest rounded-lg shadow-md transition hover:bg-lightest">
      <h2 className="py-2 font-heading font-semibold text-lg">
        {modifyEventTitle}
      </h2>
      <p className="font-modern text-sm font-medium">{date}</p>
      <p className="font-modern text-sm font-medium">{time}</p>
      <p className="py-4 my-para text-justify">{modifyEventDesc}</p>

      <button onClick={handleClick} className="my-btn w-full">
        Register
      </button>
    </div>
  );
}
