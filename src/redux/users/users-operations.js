import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllUsers } from "../../shared/api";

export const fetchUsers = createAsyncThunk(
  "users/fetch",
  async (_, thunkAPI) => {
    try {
      const { data } = await getAllUsers();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);
