import styled from "styled-components"
import img from '../../src/assets/picture.jpg'

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    min-height: 100vh;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    justify-content: center;
`

export const Items = styled.h2`
    padding: 10px;
    &:hover {
        background-color: white;
        border-radius: 10px;
        color: black;
        scale: 1.1;
        transition: ease-in 0.3s;
    }
`

export const HomeImg = styled.div`
    background: url(${img}) no-repeat;
    background-size: contain;
    background-position: center;
`