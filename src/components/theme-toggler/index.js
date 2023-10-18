import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { ButtonChangeTheme } from "../button-theme-toggler"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            <ButtonChangeTheme onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}> {theme === themes.light ? 'Dark mode' : 'Light mode'} </ButtonChangeTheme>
        </div>
    )
}