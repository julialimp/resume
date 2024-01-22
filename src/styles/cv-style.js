import styled from "styled-components"

export const CVSection = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.backgroundColor};
`

export const Div = styled.div`
    width: 700px;
    max-height: 80vh;
    margin: 50px;

p {
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    letter-spacing: 4px;
    padding: 15px;
    color: ${(props) => props.theme.color};
}
`