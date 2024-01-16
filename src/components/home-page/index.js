import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { getMenu } from "../../services/get-menu"
import { Content, HomeImg, Items, Lastname, List, Main, Name, Overlay, Subtitle, Title, Video } from '../../styles/home'
import { ThemeContext } from "../../contexts/theme-context"
import { GlobalStyle } from "../../styles/global-style"
import videoBg from '../../assets/programming.mp4'


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
        <Main theme={theme}>
            <GlobalStyle theme={theme} />
            <Overlay theme={theme} />

            <Video src={videoBg} autoPlay loop muted />
            <Content>
                <Title theme={theme}>
                    <Name>Julia</Name>
                    <Lastname>Limp.</Lastname>
                    <Subtitle>Software Developer</Subtitle>
                </Title>
                <HomeImg />
                <List >
                    {menu.map((info, index) =>
                        <li key={index}>
                            <Link to={`/${info.route}`}>
                                <Items theme={theme}>{info.title}</Items>
                            </Link>
                        </li>
                    )}
                </List>
            </Content>
        </Main >
    )
}

export { Menu }