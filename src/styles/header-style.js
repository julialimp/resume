import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 3px 50px;
    align-items: center;
    height: 7vh;
    background-color: ${(props) => props.theme.headerColor};
    color: ${(props) => props.theme.color};
    position: fixed;
    width: 100vw;
    z-index: 1;
    text-align: center;

    @media (max-width: 768px) {
        font-size: .7em;
    }
`

export const NavLink = styled(Link)`
    color: ${(props) => props.theme.color};
    font-size: 2rem;
    padding: 2px;
    display: flex;
    &:hover {
        scale: 1.1;
        transition: ease-in-out .3s;
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`