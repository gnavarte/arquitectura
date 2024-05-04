import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

export const useAuth = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const login = (email, password) => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  const register = (name, email, password) => setIsLoggedIn(true);

  return { isLoggedIn, login, logout, errorMessage };
};
