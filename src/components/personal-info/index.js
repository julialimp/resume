import styled from "styled-components";
import { Container } from "../../styles/global-style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getInfos } from "../../services/get-infos";

const PersonalInfo = () => {
    const [info, setInfo] = useState([])
    const { route } = useParams()

    useEffect(() => {
        async function fetchData() {
            const info = await getInfos(route)
            setInfo(info.data)
        }

        fetchData()
    }, [])

    return (
        <InternalPage>
            <Img src={info.image} alt={info.title} />
            <InfoDiv>
                <Title>{info.title}</Title>
                <p>{info.text}</p>
            </InfoDiv>
        </InternalPage>
    )
}



const InternalPage = styled.section`
    background-color: grey;
    display: flex;
    justify-content: center;
`

const Title = styled.h2`
    padding: 5px 15px;
    text-align: center;
`

const InfoDiv = styled.div`
    margin: auto 0;
    width: 60vw;
    padding: 150px;
`

const Img = styled.img`
    max-width: 50vw;
    max-height: 100vh;
`


export { PersonalInfo }