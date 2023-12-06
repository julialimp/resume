import { Link } from "react-router-dom"
import styled from "styled-components"
import { ThemeTogglerButton } from "../theme-toggler"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

const Header = () => {
    const { theme } = useContext(ThemeContext)
    // console.log(theme.color)
    
    return (
        <HeaderStyle className="resume-header" theme={theme}>
            <NavLink to="/">
                Home
            </NavLink>
            <h1>Julia Limp de Almeida</h1>
            <ThemeTogglerButton />
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 3px 50px;
    align-items: center;
    height: 7vh;
    background-color: ${(props) => props.theme.headerColor};
    color: ${(props) => props.theme.color};
    position: fixed;
    width: 100vw;
    z-index: 1;
`

const NavLink = styled(Link)`
    
    color: ${(props) => props.theme.color};
    &:hover {
        scale: 1.08;
        transition: ease-in-out .3s;
    }
`


export { Header }