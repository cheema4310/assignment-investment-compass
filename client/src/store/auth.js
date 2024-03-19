import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  // store JWT token in Local Storage
  const setTokenLocalStorage = (tokenJWT) => {
    localStorage.setItem('token', tokenJWT);
    setToken(tokenJWT);
    setIsLoggedIn(true);
  };

  // Log out Logic - remove token
  const logoutUser = () => {
    setToken('');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ setTokenLocalStorage, logoutUser, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
