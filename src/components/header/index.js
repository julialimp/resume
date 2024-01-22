import { ThemeTogglerButton } from "../theme-toggler"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { FaHome } from "react-icons/fa"
import { HeaderStyle, NavLink } from "../../styles/header-style"

const Header = () => {
    const { theme } = useContext(ThemeContext)
    
    return (
        <HeaderStyle className="resume-header" theme={theme}>
            <NavLink to="/">
                <FaHome />
            </NavLink>
            <ThemeTogglerButton />
        </HeaderStyle>
    )
}

export { Header }