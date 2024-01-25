import styled from "styled-components"
import bg from "../assets/bg-about-page.jpg"
import profileBg from "../assets/lgbt.jpg"

export const AboutSection = styled.section`
    min-height: 100vh;
    background: url(${bg}) right no-repeat;
    background-size: cover;
`

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
  
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;

    @media (max-width: 930px) {
        display: flex;
        flex-direction: column;
        width: 100vw;
        padding: 50px 0;
        height: 100%;
    }
`

export const Img = styled.img`
    width: 30vw;
    border-radius: 15px;
    margin: 50px;
    box-shadow: 2px 2px 50px #444455;
    background: url(${profileBg}) no-repeat;
    background-size: cover;

    @media (max-width: 678px) {
        width: 30vw;
        margin: 20px;
    }
`

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    margin: auto 0;
    width: 50vw;
    padding: 30px 50px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.backgroundColor};
    border: 1px solid;
    color: ${(props) => props.theme.color};
    text-shadow: 3px 3px 40px;

    @media (max-width: 678px) {
        width: 90vw;
        padding: 30px;
    }
`

export const Title = styled.h2`
    padding-bottom: 20px;
    text-align: center;
`

export const Text = styled.p`
    line-height: 25px;
`