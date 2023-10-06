import styled from "styled-components"
import img from '../../assets/picture.jpg'
import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <Content>
            <List>
                <Link to={"/about"}><li>About me</li></Link>
                <Link to={"/experiences"}><li>Experiences</li></Link>
                <Link to={"/cv"}><li>Curriculum</li></Link>
                <Link to={"/portfolio"}><li>Portfolio</li></Link>
                <Link to={"/contact"}><li>Contact</li></Link>
            </List>
        </Content >
    )
}

const Content = styled.div`
    display: flex;
    background-color: #000000;
    min-height: 100vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top right;
    background-size: contain;
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    height: 20vh;
    width: 50vw;
    align-items: center;
    text-transform: uppercase;
    padding-left: 15px;
    justify-content: space-between;
    margin: auto 0;
`

export { Menu }