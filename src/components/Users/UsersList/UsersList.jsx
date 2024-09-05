import { Table } from "./UsersList.styled";

const UsersList = ({ items }) => {

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