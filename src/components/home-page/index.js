import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMenu } from "../../services/get-menu"
import { Content, List } from '../../styles/home'


const Menu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        async function fetchData() {
            const menu = await getMenu()
            setMenu(menu.data)
        }
        
        fetchData()
    }, [menu])

    return (
        <Content>
            <List>
                {menu.map((info, index) =>
                    <li key={index}>
                        <Link to={`/${info.route}`}>
                            <h2>{info.title}</h2>
                        </Link>
                    </li>
                )}
            </List>
        </Content >
    )
}



export { Menu }