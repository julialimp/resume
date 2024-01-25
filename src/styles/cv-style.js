import styled from "styled-components"

export const CVSection = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.backgroundColor};
    overflow: hidden;
`

export const Div = styled.div`
    width: 700px;
    max-height: 80vh;
    margin: 50px;

    @media (max-width: 600px) {
        scale: .9;
        margin: 0;
    }

    @media (max-width: 500px) {
        scale: .7;
    }

    p {
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
        letter-spacing: 4px;
        padding: 15px;
        color: ${(props) => props.theme.color};
    }
`