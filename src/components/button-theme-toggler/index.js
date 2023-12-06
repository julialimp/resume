import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"

const ButtonChangeTheme = (props) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Button {...props} theme={theme}/>
    )
}

const Button = styled.button`
    display: flex;
    padding: 5px;
    width: 50px;
    font-size: 17px;
    border-radius: 20px;
    border: solid 1px;
    cursor: pointer;
    line-height: 17px;
    justify-content: ${(props) => props.theme.toggler};
    
    &:hover {
        scale: 1.08;
        transition: ease-in-out .3s;
    }
`

export { ButtonChangeTheme }