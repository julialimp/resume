import styled from "styled-components"
import bg from "../assets/laptop1.jpg"

export const ExperiencesSection = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${bg}) no-repeat left fixed;
    background-size: cover;

    .my-card {
        border-radius: 10px;
    }

    .my-title {
        color: ${(props) => props.theme.backgroundColor};
        background-color: ${(props) => props.theme.color};
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 8px;
    }

    li div {
        display: flex;
        flex-direction: column-reverse;
        gap: 40px;
        justify-content: flex-end;
        color: ${(props) => props.theme.color};
    }

    .my-card-title {
        font-weight: 500;
        &:hover {
            scale: 1.02;
            transition: .3s;
        }
    }
    .card-sub-title {
        font-weight: 500;
    }


    @media (max-width: 768px) {
        margin-bottom: 20px;
        
        .custom-timeline {
            width: 100vw;
        }

        .my-title {
            padding: 5px;
            font-size: .8em;
        }

        .my-card {
           width: 100%;
           font-size: .9em;
           line-height: 20px;
        }

        .my-card-title {
            font-size: 1em;
        }

        .timeline-card-content {
            /* background-color: coral; */
        }
    }
`

export const Title = styled.h2`
    color: ${(props) => props.theme.color};
    text-transform: uppercase;
    letter-spacing: 5px;
    text-align: center;
    margin: 50px;

    @media (max-width: 768px) {
        margin-top: 80px;
    }
`

export const TimeLineDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 50%;
    padding: 20px;

    @media (max-width: 768px) {
        width: 100vw;
    }
`