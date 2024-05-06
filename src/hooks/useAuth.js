import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import { authLogin, authSignup } from '../services/AuthService';

export const useAuth = () => {
  const { user, setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleResponse = async (response) => {
    const data = await response.json();
    console.log('Esta es la data', data);
    if (response.status === 201 || response.status === 200) {
      setUser(data.user);
    } else {
      setErrorMessage(data.message);
    }
  };

  const register = async (name, email, password) => {
    const response = await authSignup(name, email, password);
    await handleResponse(response);
  };

  const login = async (email, password) => {
    const response = await authLogin(email, password);
    await handleResponse(response);
  };

  const logout = () => {
    setUser(null);
  };

  return {
    isLoggedIn: user !== null,
    register,
    login,
    logout,
    errorMessage,
  };
};
