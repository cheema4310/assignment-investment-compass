import botImage from '../assets/contact-bot.png';
export default function Contact() {
  const handleSubmit = () => {};
  return (
    <div className="p-12 bg-lightest w-full">
      <div className="grid grid-cols-5 items-center h-full">
        <div className="col-span-3 my-flex">
          <div className="w-52 h-80">
            <img className="w-full h-full" src={botImage} alt="contact bot" />
          </div>
        </div>
        <div className="p-12 col-span-2 bg-darker rounded-lg shadow-xl">
          <h2 className="pb-8 pt-2 font-modern font-semibold text-lightest text-xl text-center">
            We're Here to Help! Ask Away
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <input
                className="my-input"
                type="text"
                placeholder="Full Name"
                name="name"
              />
            </div>
            <div>
              <input
                className="my-input"
                type="email"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div>
              <textarea
                className="my-input"
                rows={8}
                placeholder="Your Message"
                name="msg"
              />
            </div>
            <button className="my-btn w-full" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
