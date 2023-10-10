import styled from "styled-components"
import img from '../../src/assets/picture.jpg'

export const Content = styled.div`
    display: flex;
    background-color: #000000;
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
    height: 20vh;
    width: 60vw;
    align-items: center;
    text-transform: uppercase;
    justify-content: space-between;
    margin: auto 0;
`