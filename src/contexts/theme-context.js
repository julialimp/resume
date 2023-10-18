import { createContext, useState } from "react"

export const themes = {
    light: {
        backgroundColor: 'grey',
        headerColor: '#004444',
        color: '#000000'
    },
    dark: {
        backgroundColor: '#000000',
        headerColor: '#474f5e',
        color: '#ffffff'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}