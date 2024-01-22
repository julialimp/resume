import styled from "styled-components"
import img from "../assets/picture.jpg"
import bg from "../assets/laptop2.jpg"

export const ContactSection = styled.section`
    min-height: 100vh;
    background: url(${bg}) no-repeat right;
    background-size: cover;
`

export const Container = styled.div`
    position: absolute;
    width: 100%;
    min-height: 93vh;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.backgroundColor} 1px 0 10px;

    @media (max-width: 768px) {
        display: flex;
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

export const Img = styled.div`
    background: url(${img}) no-repeat;
    background-size: contain;
    background-position: center;

    @media (max-width: 768px) {
        display: none;
    }
`

export const ContactInfo = styled.div`
    /* background-color:coral; */
    display: flex;
    align-items: center;

    strong {
        /* background-color: blue; */
        width: 30%;
        text-align: center;
        letter-spacing: .5px;
        line-height: 20px;
    }

    @media (max-width: 930px) {
        scale: .8;
        flex-direction: column;
        justify-content: space-evenly;

        strong {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        padding: 30px 80px;
        scale: 1;
    }
`

export const ContactList = styled.ul`
    /* background-color: red; */
    text-transform: initial;
    font-size: 18px;
    font-weight: bold;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 40%;

    li {
        align-self: flex-start;
        padding: 10px;
    }
    li:hover {
        background-color: ${(props) => props.theme.hoverColor};
        border-radius: 10px;
        scale: 1.1;
        transition: ease-in-out 0.4s;
    }
    svg {
        margin-right: 8px;
    }

    @media (max-width: 930px) {
        font-size: 18px;
    }

    @media (max-width: 768px) {
        li {
            align-self: center;
            width: 150px;
            font-size: 16px;
        }
    }
`