import axios from 'axios';

const url = import.meta.env.VITE_SERVER_URL;

const api = axios.create({
  baseURL: url,
  withCredentials: true, 
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return api(originalRequest); 
      } catch (refreshError) {
        console.error('Unable to refresh token:', refreshError);
        return Promise.reject(refreshError); 
      }
    }

    return Promise.reject(error);
  }
);

const refreshAccessToken = async () => {
  try {
    const response = await axios.post(`${url}/user/refresh_token`, {}, { withCredentials: true });

    const newAccessToken = response.data.accessToken;

    localStorage.setItem('accessToken', newAccessToken);

    return newAccessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);

    localStorage.removeItem('accessToken');

    throw error;
  }
};

export default api;
