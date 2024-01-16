import { createContext, useState } from "react"

export const themes = {
    light: {
        backgroundColor: '#cec9bc',
        headerColor: 'none',
        color: '#222f28',
        overlay: 'radial-gradient(circle, #cec9bcaa 15%, #cec9bcaa 40%, #cec9bc 90%);',
        hoverColor: '#7a8474aa'
    },
    dark: {
        backgroundColor: '#222f28',
        headerColor: 'none',
        color: '#cec9bc',
        toggler: 'flex-end',
        overlay: 'radial-gradient(circle, #222f28aa 15%, #222f28aa 40%, #222f28 80%);',
        hoverColor: '#7a8474aa'
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