import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
	name: "userInfo",
	initialState: {
		id: null,
	},
	reducers: {
		fetchUser: (state, action) => {
			state.id = action.payload;
		},
	},
});

export const { fetchUser } = userInfoSlice.actions;

export const selectId = (state) => state.userInfo.id;

export default userInfoSlice.reducer;
