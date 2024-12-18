import api from './api';

export const getPosts = async () => {
  const response = await api.get(`/post/get_posts`);
  return response.data.posts;
};

export const getPost = async (id) => {
  const response = await api.get(`/post/get_post/${id}`);
  return response.data.post;
};

export const createPost = async (data) => {
  try {
    const response = await api.post(`/post/create_post`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

export const setViewCount = async (id) => {
	const response = await api.get(`/post/view_post/${id}`);
	return response.data;
};