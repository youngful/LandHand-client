// src/redux/searchSlice.js
import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
	name: 'search',
	initialState: {
		query: ''
	},
	reducers: {
		setPostQuery: (state, action) => {
			state.query = action.payload
		}
	}
})

export const { setPostQuery } = searchSlice.actions
export default searchSlice.reducer
