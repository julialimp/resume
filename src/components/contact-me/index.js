import styled from "styled-components";
import { Container } from "../../styles/global-style";

const PersonalContact = () => {
    return (
        <Container>
            <Title>Contacts</Title>
        </Container>
    )
}

const Title = styled.h2`
    padding: 5px 15px;
    text-align: center;
`

export { PersonalContact }