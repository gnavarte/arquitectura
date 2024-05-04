import { useState } from 'react';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const login = (email, password) => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  const register = (name, email, password) => setIsLoggedIn(true);

  return { isLoggedIn, login, logout, errorMessage };
};
