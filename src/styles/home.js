import styled from "styled-components"

export const Main = styled.div`
    height: 100%;
`

export const Content = styled.div`
    position: absolute;
    width: 100%;
    min-height: 100vh;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: ${(props) => props.theme.color};
    

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 0;
    }
`
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => props.theme.color};
    font-size: 80px;
    line-height: 100px;

    @media (max-width: 950px) {
        scale: 0.8;
    }
    @media (max-width: 768px) {
        width: 70vw;
        scale: 0.6;
    }
`

export const Name = styled.h2`
    align-self: center;
`

export const Lastname = styled.h2`
    align-self: end;
`

export const Subtitle = styled.p`
    font-weight: 300;
    font-size: 15px;
    align-self: center;
    letter-spacing: 3.5px;
    line-height: 20px;
    width: 250px;
    text-align: right;

    @media (max-width: 1200px) {
        text-align: left;
    }
    @media screen and (min-width: 768px) and (max-width: 950px) {
        width: 100%;
    }
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: initial;
    justify-content: center;

    @media (max-width: 768px) {
        scale: 0.8;
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
        background-color: ${(props) => props.theme.hoverColor};
        border-radius: 10px;
        scale: 1.1;
        transition: ease-in 0.3s;
    }

    @media (max-width: 990px) {
        margin: 0;
    }
`

export const DivImg = styled.div`
    display: flex;
    position: relative;

    @media (max-width: 1200px) {
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 768px) {
        width: 25vw;
    }
`

export const HomeImg = styled.img`
    max-width: 100%;
    position: absolute;
    bottom: 0;

    @media (max-width: 1200px) {
        position: relative;
        bottom: auto;
    }

    @media (max-width: 768px) {
       height: 100%;

    }
`

export const Video = styled.video`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`