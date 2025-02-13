import { Chrono } from "react-chrono"
import { items } from "./data"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { GlobalStyle, Overlay } from "../../styles/global-style"
import { chronoTheme } from "./theme"
import { ExperiencesSection, TimeLineDiv, Title } from "../../styles/my-experiences-style"

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

                    cardWidth={500}
                    cardHeight={300}
                    
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

export { MyExperiences }