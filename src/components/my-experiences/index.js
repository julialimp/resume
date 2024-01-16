import styled from "styled-components"
import bg from "../../assets/laptop1.jpg"
import { Chrono } from "react-chrono"
import { items } from "./data"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { GlobalStyle } from "../../styles/global-style"
import { chronoTheme } from "./theme"


const MyExperiences = () => {
    const { theme } = useContext(ThemeContext)
    
    return (
        <ExperiencesSection theme={theme}>
            <GlobalStyle theme={theme} />
            <Overlay theme={theme} />
            
            <TimeLineDiv>
                <Title theme={theme}>Experiences</Title>
                <Chrono items={items}
                    theme={chronoTheme}
                    className="custom-timeline"
                    mode="VERTICAL_ALTERNATING"
                    // slideShow
                    // slideItemDuration={5000}

                    cardWidth={500}
                    cardHeight={200}
                    
                    itemWidth={310}
                    nestedCardHeight={150}
                    titlePosition={"TOP"}
                    timelinePointShape={"circle"}
                    timelinePointDimension={15}

                    fontSizes={{
                        title: "1rem",
                        cardTitle: "1.3rem"
                    }}

                    classNames={{
                        card: "my-card",
                        title: "my-title",
                        cardTitle: "my-card-title"
                    }}
                />
            </TimeLineDiv>
        </ExperiencesSection>
    )
}


const ExperiencesSection = styled.section`
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

    .eAWuEf {
        background-color: ${(props) => props.theme.hoverColor};
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
        /* background-color: red; */
        display: flex;
        flex-direction: column-reverse;
        gap: 40px;
        justify-content: flex-end;
        color: ${(props) => props.theme.color};
    }

    .my-card-title {
        /* text-decoration: underline; */
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

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.overlay};
`

const Title = styled.h2`
    /* position: absolute; */
    /* width: 70%; */
    /* background-color: red; */
    /* background-color: ${(props) => props.theme.backgroundColor}; */
    color: ${(props) => props.theme.color};
    text-transform: uppercase;
    letter-spacing: 5px;
    text-align: center;
    margin: 50px;

    @media (max-width: 768px) {
        margin-top: 80px;
    }
`

const TimeLineDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    /* background-color: coral; */
    /* background-color: ${(props) => props.theme.backgroundColor}; */
    width: 70%;
    height: 50%;
    padding: 20px;

    @media (max-width: 768px) {
        width: 100vw;
    }
`

export { MyExperiences }