export const getUsers = ({ users }) => users.items;

export const getFilteredUsers = ({ filter, users }) => {
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
