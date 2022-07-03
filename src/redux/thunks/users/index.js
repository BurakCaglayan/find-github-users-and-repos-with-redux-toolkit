import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../../../api/users';

export const getUsersRequest = createAsyncThunk(
  'users/getUsers',
  async ({ userName }) => {
    const response = await getUsers({ userName });
    return response.data;
  }
);