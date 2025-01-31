import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
	name: "images",
	initialState: {
		images: [],
	},
	reducers: {
		addImage: (state, action) => {
			state.images.push(action.payload);
		},
	},
});

export const { addImage } = imagesSlice.actions;
export default imagesSlice.reducer;
