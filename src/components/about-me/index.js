import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { getInfos } from "../../services/get-infos"
import { AboutSection, Overlay, Container, InfoDiv, Title, Text, Img } from "../../styles/about-me-style"



const AboutMe = () => {
    const [info, setInfo] = useState([])

    const { theme } = useContext(ThemeContext)
    // console.log(theme.color)

    useEffect(() => {
        async function fetchData() {
            const info = await getInfos('about')
            setInfo(info.data)
        }
        fetchData()
    }, [])

    return (
        <AboutSection theme={theme}>
            <Overlay theme={theme} />

            <Container>
                <div>
                    <Img src={info.image} alt={info.title} />
                </div>
                <InfoDiv theme={theme}>
                    <Title>{info.title}</Title>
                    <Text>{info.text}</Text>
                </InfoDiv>
            </Container>
        </AboutSection>
    )
}

export { AboutMe }