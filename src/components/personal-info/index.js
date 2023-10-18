import styled from "styled-components";
// import { Container } from "../../styles/global-style";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getInfos } from "../../services/get-infos";
import { ThemeContext } from "../../contexts/theme-context";

const PersonalInfo = () => {
    const [info, setInfo] = useState([])
    const { route } = useParams()

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        async function fetchData() {
            const info = await getInfos(route)
            setInfo(info.data)
        }

        fetchData()
    }, [route])

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

export { PersonalInfo }