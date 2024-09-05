import Container from "../../components/Container/Container"
import Users from "../../components/Users/Users"
import { Title } from "./UsersPage.styled"

const UsersPage = () => {
    return (
        <Container>
            <Title>USERS</Title>
            <Users />
        </Container>
    )
}
export default UsersPage;