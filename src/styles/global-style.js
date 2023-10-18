import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}  

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


#root {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
}
`

export const BodyStyle = createGlobalStyle`
    body {
        /* color: black; */
    }
`


// background-color:  ${(props) => props.theme.backgroundColor};