// src/store/store.js
import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './slice/search.slice'
import postsReducer from './slice/posts.slice'

const store = configureStore({
	reducer: {
		search: searchReducer,
		posts: postsReducer,
	}
})

export default store