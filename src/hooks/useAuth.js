import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import { authLogin, authSignup } from '../services/AuthService';

export const useAuth = () => {
  const { user, setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const register = async (name, email, password) =>
    await authSignup(name, email, password).then((data) => {
      if (data.user) {
        setUser(data.user);
      }
    }).catch((error) => {
      setErrorMessage(error.response.data.message);
    });

  const login = async (email, password) => {
    await authLogin(email, password).then((data) => {
      if (data.user) {
        setUser(data.user);
      }
    }).catch((error) => {
      setErrorMessage(error.response.data.message);
    });
  };

  const logout = async () => {
    try {
      // await authService.logout();
      setUser(null);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return {
    isLoggedIn: user !== null,
    register,
    login,
    logout,
    errorMessage,
  };
}
