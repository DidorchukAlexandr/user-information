export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

type UsersState = {
  items: User[];
};

export type RootState = {
  users: UsersState;
  filter: string;
};
