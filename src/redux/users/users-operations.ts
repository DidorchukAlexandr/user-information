import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllUsers } from "../../shared/api";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetch",
  async (_, thunkAPI) => {
    try {
      const { data } = await getAllUsers();
      return data;
    } catch (error) {
  if (error instanceof Error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  return thunkAPI.rejectWithValue("Unknown error");
}
  }
);
