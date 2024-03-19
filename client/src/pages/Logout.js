import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../store/auth';

export default function Logout() {
  const { logoutUser } = useContext(AuthContext);
  useEffect(() => {
    logoutUser();
  }, [logoutUser]);
  return <Navigate to="/" />;
}
