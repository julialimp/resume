import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    color: #ffffff;
    box-sizing: border-box;
}  

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

body {
    height: 100vh;
}

#root {
    max-height: 100%;
    position: relative;
    overflow: hidden;
}
`

export const Container = styled.div`
  background-color: #000000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


// background-color:  ${(props) => props.theme.backgroundColor};