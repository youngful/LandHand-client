import { useState, useEffect } from 'react';
import api from '../api/api';
import { checkToken } from '../api/userService'

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAndRefreshToken = async () => {
      const token = localStorage.getItem('accessToken');
      if (token && isTokenValid(token)) {
        setAuthenticated(true);
      } else {
				const refreshToken = await checkToken();
								
        if (!refreshToken) {
          setAuthenticated(false);
          return;
        }

        try {
          const response = await api.post('/user/refresh_token', {}, { withCredentials: true });
          localStorage.setItem('accessToken', response.data.accessToken);
          setAuthenticated(true);
        } catch (error) {
          console.error('Unable to refresh token:', error);

          localStorage.removeItem('accessToken');
          setAuthenticated(false);
        }
      }
    };

    checkAndRefreshToken();
  }, []);

  return authenticated;
};

const isTokenValid = (token) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 > Date.now(); 
  } catch {
    console.error('Invalid token format');
    return false;
  }
};

export default useAuth;
