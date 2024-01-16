import { createContext, useState } from "react"

export const themes = {
    light: {
        backgroundColor: '#7a8474aa',
        headerColor: 'none',
        color: '#222f28',
        overlay: 'radial-gradient(circle, #cec9bcaa 15%, #cec9bcaa 40%, #cec9bc 90%);'
    },
    dark: {
        backgroundColor: '#7a8474aa',
        headerColor: 'none',
        color: '#cec9bc',
        toggler: 'flex-end',
        overlay: 'radial-gradient(circle, #222f28aa 15%, #222f28aa 40%, #222f28 80%);'
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