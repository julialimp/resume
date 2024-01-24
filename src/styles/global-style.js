import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}

#root {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: ${(props) => props.theme.overlay};
`