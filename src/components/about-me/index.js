import styled from "styled-components";
import { Container } from "../../styles/global-style";

const AboutMe = () => {
    return (
        <Container>
            <Title>About me</Title>
        </Container>
    )
}

const Title = styled.h2`
    padding: 5px 15px;
    text-align: center;
`

export { AboutMe }