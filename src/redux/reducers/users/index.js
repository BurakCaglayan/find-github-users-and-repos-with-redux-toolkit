import { createSlice } from '@reduxjs/toolkit';
import { getUsersRequest } from '../../thunks/users'

const initialState = {
  users: {
    data: {},
    isPending: false,
    error: null
  },
  filters: {
    userName: '',
  }
};

export const githubUsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    filters: (state, action) => {
      state.filters.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersRequest.pending, (state) => {
        state.isPending = true;
      })
      .addCase(getUsersRequest.fulfilled, (state, action) => ({
        ...state,
        users: {
          ...initialState.users,
          data: action.payload,
          isPending: false,
        },
      }));
  },
});

export const { filters } = githubUsersSlice.actions;

export default githubUsersSlice.reducer;