import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { getMenu } from "../../services/get-menu"
import { Content, HomeImg, Items, List } from '../../styles/home'
import { ThemeContext } from "../../contexts/theme-context"
import { GlobalStyle } from "../../styles/global-style"


const Menu = () => {
    const [menu, setMenu] = useState([])

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        async function fetchData() {
            const menu = await getMenu()
            setMenu(menu.data)
        }
        
        fetchData()
    }, [])

    return (
        <Content theme={theme}>
            <GlobalStyle theme={theme} />
            <List>
                {menu.map((info, index) =>
                    <li key={index}>
                        <Link to={`/${info.route}`}>
                            <Items>{info.title}</Items>
                        </Link>
                    </li>
                )}
            </List>
            <HomeImg />
        </Content >
    )
}



export { Menu }