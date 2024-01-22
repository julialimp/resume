import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { Button } from "../../styles/theme-toggler-button-style"

const ButtonChangeTheme = (props) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Button {...props} theme={theme}/>
    )
}

export { ButtonChangeTheme }