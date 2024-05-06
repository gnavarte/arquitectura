import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { authLogin, authSignup } from '../services/AuthService';

export const useAuth = () => {
  const { user, setUser, errorMessage, setErrorMessage } = useContext(UserContext);

  const handleResponse = async (response) => {
    const data = await response.json();
    if (response.status === 201 || response.status === 200) {
      setUser(data.user);
    } else {
      if (Array.isArray(data.message)) {
        data.message = data.message
          .map((msg) => msg.charAt(0).toUpperCase() + msg.slice(1))
          .join('\n');
      }
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

  const logout = async () => {
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
