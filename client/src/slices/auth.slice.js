/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	currentUser: null,
	loading: false,
	error: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			state.currentUser = action.payload;
			state.loading = false;
			state.error = false;
		},
		logout: (state) => {
			state.currentUser = null;
		},
	},
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
