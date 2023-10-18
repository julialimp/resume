import styled from "styled-components"
import img from '../../src/assets/picture.jpg'

export const Content = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    min-height: 100vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top right;
    background-size: contain;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 60vw;
    align-items: center;
    text-transform: uppercase;
    justify-content: center;
    margin: auto 0;
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