import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFilteredUsers } from "../../redux/users/users-selectors";
import { getFilter } from "../../redux/filter/filter-selectors";
import { setFilter } from "../../redux/filter/filter-actions";
import { fetchUsers } from "../../redux/users/users-operations";


import UsersList from "./UsersList/UsersList";
import { Wrapper, Input } from "./Users.styled";
const Users = () => {

const filteredUsers = useSelector(getFilteredUsers);
const filter = useSelector(getFilter);


const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchUsers());
}, [dispatch])

    const handleFilter = ({ target }) => {
       dispatch(setFilter(target.value));  
    }

    return (
        <>
           <Wrapper>
              <Input value={filter} name="filter" onChange={handleFilter}  placeholder="enter filter data"/>
           </Wrapper>
            <UsersList items={filteredUsers} />
        </>
    )
}
export default Users;