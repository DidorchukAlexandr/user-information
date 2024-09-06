import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFilteredUsers } from "../../redux/users/users-selectors";
import { getFilter } from "../../redux/filter/filter-selectors";
import { setFilter } from "../../redux/filter/filter-actions";
import { fetchUsers } from "../../redux/users/users-operations";
import { AppDispatch } from "../../redux/store";

import UsersList from "./UsersList/UsersList";
import { Wrapper, Input } from "./Users.styled";

const Users: React.FC = () => {

const filteredUsers = useSelector(getFilteredUsers);
const filter = useSelector(getFilter);


const dispatch: AppDispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchUsers());
}, [dispatch])

    const handleFilter = (event: any) => {
       dispatch(setFilter(event.target.value));  
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