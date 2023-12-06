import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"
import { getInfos } from "../../services/get-infos"
import bg from "../../assets/bg-test.jpg"
import profileBg from "../../assets/lgbt.jpg"


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

const AboutSection = styled.section`
    min-height: 100vh;
    background: url(${bg}) right no-repeat;
    background-size: cover;
`

const Container = styled.div`
    position: absolute;
    min-height: 100vh;
    /* background-color: ${(props) => props.theme.backgroundColor}; */
    
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.overlay};
`

const Img = styled.img`
    width: 30vw;
    border-radius: 15%;
    margin: 50px;
    box-shadow: 2px 2px 50px #444455;
    background: url(${profileBg}) no-repeat;
    background-size: cover;
`

const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    margin: auto 0;
    width: 50vw;
    padding: 30px 50px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.headerColor};
    color: ${(props) => props.theme.color};
    text-shadow: 3px 3px 40px;
`

const Title = styled.h2`
    padding-bottom: 20px;
    text-align: center;
`

const Text = styled.p`
    line-height: 25px;
`

export { AboutMe }