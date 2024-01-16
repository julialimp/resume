import styled from "styled-components"
// import img from '../../src/assets/picture.jpg'
import img from '../../src/assets/profile-picture.png'

export const Main = styled.div`
    max-height: 100vh;
`

export const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 93vh;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: ${(props) => props.theme.color};

    @media (max-width: 768px) {
        /* display: flex; */
        /* flex-direction: column-reverse; */
        /* justify-content: center; */
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.overlay};
`
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: coral; */
    justify-content: center;
    color: ${(props) => props.theme.color};
    font-size: 80px;
    line-height: 100px;
`

export const Name = styled.h2`
    align-self: center;
`

export const Lastname = styled.h2`
    /* position: absolute; */
    align-self: end;
`

export const Subtitle = styled.p`
    font-weight: 300;
    font-size: 15px;
    /* background-color: coral; */
    align-self: center;
    letter-spacing: 3.5px;
    line-height: 20px;
    width: 250px;
    text-align: right;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: initial;
    justify-content: center;

    @media(max-width: 375px) {
        scale: .8;
    }
`

export const Items = styled.h2`
    margin-right: 150px;
    padding: 2.5px;
    color: ${(props) => props.theme.color};
    font-weight: 300;
    letter-spacing: 3px;
    font-size: 20px;

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
    background-position: left;
    
    @media (max-width: 768px) {
        /* flex: 0.8; */
        /* margin-bottom: 10px; */
    }
`

export const Video = styled.video`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`