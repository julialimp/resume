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
                />
            </TimeLineDiv>
        </ExperiencesSection>
    )
}


const ExperiencesSection = styled.section`
    /* background-color: ${(props) => props.theme.backgroundColor}; */
    min-height: 100vh;
    /* padding: 50px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${bg}) no-repeat left fixed;
    background-size: cover;


    .TimelineTitleContainer-sc-18iuiou-4.CZfvq {
        /* background-color: blue; */
        /* background-color: ${(props) => props.theme.color}; */
        color: red;
        border-radius: 8px;
        /* gap: 20px; */
        display: flex;
        flex-direction: column;
    }

    ul {
        /* background-color: white; */
        /* height: 100px; */
        /* margin-top: 20px; */
    }

    li div {
        /* background-color: red; */
        display: flex;
        flex-direction: column-reverse;
        gap: 40px;
        justify-content: flex-end;
        color: ${(props) => props.theme.color};
        /* padding-top: 4px; */
    }
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.overlay};
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
`

const Title = styled.h2`
    /* position: absolute; */
    /* width: 70%; */
    /* background-color: red; */
    /* background-color: ${(props) => props.theme.backgroundColor}; */
    color: ${(props) => props.theme.color};
    text-transform: uppercase;
    text-align: center;
    margin: 30px;

`

export { MyExperiences }