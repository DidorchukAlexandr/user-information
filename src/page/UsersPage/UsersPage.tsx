import React from "react"
import Container from "../../components/Container/Container"
import Users from "../../components/Users/Users"
import { Title } from "./UsersPage.styled"

const UsersPage: React.FC = () => {
    return (
        <Container>
            <Title>USERS</Title>
            <Users />
        </Container>
    )
}
export default UsersPage;