import styled from "styled-components"
import img from '../../src/assets/picture.jpg'

export const Main = styled.div`
    max-height: 100vh;
`

export const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 93vh;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: ${(props) => props.theme.color};
    
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.overlay};
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
    color: ${(props) => props.theme.color};
    &:hover {
        background-color: ${(props) => props.theme.backgroundColor};
        border-radius: 10px;
        scale: 1.1;
        transition: ease-in 0.3s;
    }
`

export const HomeImg = styled.div`
    background: url(${img}) no-repeat;
    background-size: contain;
    background-position: center;
`

export const Video = styled.video`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`