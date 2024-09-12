import React from "react";
import { Table } from "./UsersList.styled";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

type UsersListProps = {
  items: User[];
}

const UsersList: React.FC<UsersListProps> = ({ items }) => {

const elements = items.map(({id, name, username, email, phone}) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{phone}</td>
    </tr>
))

  return (
        <Table>
         <thead>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>email</th>
          <th>phone</th>
        </tr>
       </thead>
       <tbody>
        {elements}
      </tbody>
      </Table>
    )
}
export default UsersList;