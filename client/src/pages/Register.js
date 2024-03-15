import { Link } from 'react-router-dom';
import AuthPagesLayout from '../components/shared/AuthPagesLayout';

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <AuthPagesLayout>
      <div className="flex flex-col gap-12">
        <h2 className="my-heading text-lightest text-center">
          Register to Get Started
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="my-input"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="my-input"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="my-input"
            />
          </div>
          <button className="my-btn-light w-full">Register</button>
        </form>
        <div className="flex flex-col">
          {/* <p className="relative text-center my-after">or</p> */}
          <div className="text-center relative">
            <span className="inline-block px-2 py-1 bg-darker text-lightest z-10 relative">
              OR
            </span>
            <span className="absolute top-1/2 h-0.5 bg-lighter w-full left-0 transform -translate-y-1/2"></span>
            <span className="absolute top-1/2 h-0.5 bg-lighter w-full right-0 transform -translate-y-1/2"></span>
          </div>
          <Link className="my-btn-light w-full mt-4" to="/register">
            Sign In
          </Link>
        </div>
      </div>
    </AuthPagesLayout>
  );
}
