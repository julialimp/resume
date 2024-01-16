import { Link } from "react-router-dom"
import styled from "styled-components"
import { ThemeTogglerButton } from "../theme-toggler"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { FaHome } from "react-icons/fa"

const Header = () => {
    const { theme } = useContext(ThemeContext)
    // console.log(theme.color)
    
    return (
        <HeaderStyle className="resume-header" theme={theme}>
            <NavLink to="/">
                <FaHome />
            </NavLink>
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
    text-align: center;

    @media (max-width: 768px) {
        font-size: .7em;
    }
`

const NavLink = styled(Link)`
    color: ${(props) => props.theme.color};
    font-size: 2rem;
    padding: 2px;
    display: flex;
    &:hover {
        scale: 1.1;
        transition: ease-in-out .3s;
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export { Header }