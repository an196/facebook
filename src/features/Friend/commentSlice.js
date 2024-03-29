import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');
import commentApi from '../../api/commentApi';
import { friendComments } from '../../data/dummy';

const initialState = {
	comments: friendComments,
};

export const getFriendComments = createAsyncThunk('comment/getComments', async () => {
	const response = await commentApi.getComments();

	if (response.status === 200) return response.data;
	return 0;
});

export const commentSlice = createSlice({
	name: 'comment',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getFriendComments.fulfilled, (state, { payload }) => {
			state.comments = payload;
		});
	},
});

// Action creators are generated for each case reducer function
export const {} = commentSlice.actions;

export const selectFriendComments = (state) => state.comment.comments;
export default commentSlice.reducer;
