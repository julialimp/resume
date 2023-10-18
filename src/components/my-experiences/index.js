import styled from "styled-components"
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

            <Title theme={theme}>Experiences</Title>
            <TimeLineDiv>
                <Chrono items={items}
                    // {...theme === themes.light ? console.log("light") : console.log("dark")}
                    theme={chronoTheme}
                    // scrollable

                    cardWidth={500}
                    cardHeight={200}
                    itemWidth={310}
                    nestedCardHeight={150}
                    titlePosition={"TOP"}
                    timelinePointShape={"circle"}
                    timelinePointDimension={15}
                    // flipLayout 

                    fontSizes={{
                        title: "1rem",
                        cardTitle: "1.3rem"
                    }}
                //   cardPositionHorizontal={"TOP"}
                // enableDarkToggle
                // useReadMore
                // hideControls
                // slideItemDuration={10000} slideShow
                />
            </TimeLineDiv>
        </ExperiencesSection>
    )
}


const ExperiencesSection = styled.section`
    background-color: ${(props) => props.theme.backgroundColor};
    min-height: 100vh;
    /* padding: 50px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .TimelineTitleContainer-sc-18iuiou-4.CZfvq {
        /* background-color: blue; */
        background-color: ${(props) => props.theme.color};
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
        /* padding-top: 4px; */
    }
`
const Title = styled.h2`
    width: 100%;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    text-transform: uppercase;
    text-align: center;
    margin: 30px;

`

const TimeLineDiv = styled.div`
    /* background-color: coral; */
    background-color: ${(props) => props.theme.backgroundColor};
    width: 70%;
    height: 50%;
    padding: 20px;
`


export { MyExperiences }