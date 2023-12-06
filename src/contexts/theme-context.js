import { createContext, useState } from "react"

export const themes = {
    light: {
        backgroundColor: '#ffffff',
        headerColor: '#ffffff7a',
        color: '#000000',
        overlay: '#ffffffaa'
    },
    dark: {
        backgroundColor: '#000000',
        headerColor: '#4444447a',
        color: '#ffffff',
        toggler: 'flex-end',
        overlay: '#000000aa'
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