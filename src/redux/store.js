import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../redux/reducers/users';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
