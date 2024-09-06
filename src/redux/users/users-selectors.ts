import { User, RootState } from "./types";

export const getUsers = (state: RootState): User[] => state.users.items;

export const getFilteredUsers = (state: RootState): User[] => {
  const { filter, users } = state;
  if (!filter) {
    return users.items;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = users.items.filter(({ name, username, email, phone }) => {
    return (
      name.toLowerCase().includes(normalizedFilter) ||
      username.toLowerCase().includes(normalizedFilter) ||
      email.toLowerCase().includes(normalizedFilter) ||
      phone.toLowerCase().includes(normalizedFilter)
    );
  });
  return result;
};
