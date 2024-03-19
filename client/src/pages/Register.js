import { Link, useNavigate } from 'react-router-dom';
import AuthPagesLayout from '../components/shared/AuthPagesLayout';
import { useContext, useState } from 'react';
import LoadingSpinner from '../components/shared/LoadingSpinner/LoadingSpinner';
import InputError from '../components/shared/InputError';
import { AuthContext } from '../store/auth';

const PRO_URL =
  'https://assignment-investment-compass.onrender.com/api/auth/register';
// const DEV_URL = 'http://localhost:5001/api/auth/register';

export default function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const { setTokenLocalStorage } = useContext(AuthContext);

  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [key]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(PRO_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Register successful');
        setUser({ name: '', email: '', password: '' });
        setLoading(false);
        setTokenLocalStorage(data.token);
        navigate('/');
      } else {
        setErrors(data.message);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log('CATCH Register-Page ' + error.message);
    }
  };
  return (
    <AuthPagesLayout>
      <div className="flex flex-col gap-12">
        <h2 className="my-heading text-lightest text-center">
          Register to Get Started
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="my-input"
              onChange={handleInput}
              value={user.name}
              required
            />
            {errors.name && <InputError error={errors.name} />}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="my-input"
              onChange={handleInput}
              value={user.email}
              required
            />
            {errors.email && <InputError error={errors.email} />}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="my-input"
              onChange={handleInput}
              value={user.password}
              required
            />
            {errors.password && <InputError error={errors.password} />}
          </div>
          <button type="submit" className="my-btn-light w-full">
            {loading ? <LoadingSpinner /> : 'Register'}
          </button>
        </form>

        <div className="flex flex-col">
          <div className="text-center relative">
            <span className="inline-block px-2 py-1 bg-darker text-lightest z-10 relative">
              OR
            </span>
            <span className="absolute top-1/2 h-0.5 bg-lighter w-full left-0 transform -translate-y-1/2"></span>
            <span className="absolute top-1/2 h-0.5 bg-lighter w-full right-0 transform -translate-y-1/2"></span>
          </div>
          <Link className="my-btn-light w-full mt-4" to="/login">
            Sign In
          </Link>
        </div>
      </div>
    </AuthPagesLayout>
  );
}
