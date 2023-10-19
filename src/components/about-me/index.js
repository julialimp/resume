import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"
import { getInfos } from "../../services/get-infos"


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
        <InternalPage theme={theme}>
            <div>
                <Img src={info.image} alt={info.title} />
            </div>
            <InfoDiv>
                <Title>{info.title}</Title>
                <Text>{info.text}</Text>
            </InfoDiv>
        </InternalPage>
    )
}

const InternalPage = styled.section`
    min-height: 100vh;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    width: 30vw;
    border-radius: 50%;
    margin: 50px;
    box-shadow: 2px 2px 50px #444455;
`

const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    margin: auto 0;
    width: 50vw;
    padding: 0 50px;
`

const Title = styled.h2`
    padding-bottom: 20px;
    text-align: center;
`

const Text = styled.p`
    line-height: 25px;
`

export { AboutMe }