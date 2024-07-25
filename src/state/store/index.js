import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "../images/imagesSlice";

const store = configureStore({
	reducer: {
		imageStore: imagesReducer,
	},
});

export default store;
