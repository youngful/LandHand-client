import axios from 'axios';

const url = import.meta.env.VITE_LOCAL_SERVER_URL

export const getPosts = async () => {
	const response = await axios.get(`${url}/post/get_posts`);
	return response.data.posts;
};

export const getPost = async (id) => {
	const response = await axios.get(`${url}/post/get_post/${id}`);
	return response.data.post;
};

export const createPost = async (data) => {
  try {
    const response = await axios.post(`${url}/post/create_post`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error; 
  }
};

export const setViewCount = async (id) => {
	const response = await axios.get(`${url}/post/view_post/${id}`);
	return response.data;
};

export const registerUser = async (data) => {
	const response = await axios.post(`${url}/user/sign_up`, data);
	return response.data;
}

export const loginUser = async (data) => {
	const response = await axios.post(`${url}/user/log_in`, data);
	return response.data;
}