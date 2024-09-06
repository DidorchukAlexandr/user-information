import { combineReducers } from "@reduxjs/toolkit";

import usersReducer from "./users/users-slice";
import filterReducer from "./filter/filter-reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  filter: filterReducer,
});

export default rootReducer;
