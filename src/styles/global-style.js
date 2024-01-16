import { createGlobalStyle } from "styled-components";

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

body {
    
}
`

export const BodyStyle = createGlobalStyle`
    body {
        /* height: 90vh; */
    }
`


// background-color:  ${(props) => props.theme.backgroundColor};