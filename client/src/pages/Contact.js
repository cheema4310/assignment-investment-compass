import { useState } from 'react';
import botImage from '../assets/contact-bot.png';
import LoadingSPinner from '../components/shared/LoadingSpinner/LoadingSpinner';
import InputError from '../components/shared/InputError';
export default function Contact() {
  const [userMsg, setUserMsg] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUserMsg({
      ...userMsg,
      [key]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userMsg),
      });
      const data = await response.json();

      if (response.ok) {
        setUserMsg({ name: '', email: '', message: '' });
        setLoading(false);
      } else {
        setLoading(false);
        setErrors(data.message);
      }
    } catch (error) {
      console.log('Conatct CATCH block: ' + error.message);
    }
  };
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
          <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
            <div>
              <input
                className="my-input"
                type="text"
                placeholder="Full Name"
                value={userMsg.name}
                onChange={handleInput}
                name="name"
              />
              {errors.name && <InputError error={errors.name} />}
            </div>
            <div>
              <input
                className="my-input"
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={handleInput}
                value={userMsg.email}
                required
              />
              {errors.email && <InputError error={errors.email} />}
            </div>
            <div>
              <textarea
                className="my-input"
                rows={8}
                placeholder="Your Message"
                name="message"
                onChange={handleInput}
                value={userMsg.message}
                required
              />
              {errors.message && <InputError error={errors.message} />}
            </div>
            <button
              className="my-btn w-full hover:bg-lightest hover:text-darkest"
              type="submit"
            >
              {loading ? <LoadingSPinner /> : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
