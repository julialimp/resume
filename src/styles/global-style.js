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
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
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