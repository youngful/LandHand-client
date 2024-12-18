import api from './api';

export const setViewCount = async (id) => {
  const response = await api.get(`/post/view_post/${id}`);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await api.post(`/user/sign_up`, data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await api.post(`/user/log_in`, data);
	
  localStorage.setItem('accessToken', response.data.accessToken);
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.get(`/user/log_out`);
  localStorage.removeItem('accessToken');
  return response.data;
};