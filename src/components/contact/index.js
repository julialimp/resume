import styled from "styled-components"
import img from "../../assets/picture.jpg"
import bg from "../../assets/laptop2.jpg"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { useState } from "react"
import { useEffect } from "react"
import { getInfos } from "../../services/get-infos"
import { FaGithub, FaLinkedin, FaMailBulk, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"


const MyContact = () => {
    const [infos, setInfos] = useState([])
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        async function fetchData() {
            const info = await getInfos('contact')
            setInfos(info.data)
        }
        fetchData()
    }, [])

    return (
        <ContactSection theme={theme}>
            <Overlay theme={theme} />

            <Container theme={theme}>
                <Img />
                <ContactInfo>
                    <ContactList theme={theme}>
                        <li><a href={infos.whatsapp} target="_blank" rel="noreferrer"> <FaWhatsapp /> Whatsapp</a></li>
                        <li><a href={infos.phone}><FaPhoneAlt /> Phone</a></li>
                        <li><a href={infos.email}><FaMailBulk /> Email</a></li>
                        <li><a href={infos.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> Linkedin</a></li>
                        <li><a href={infos.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub </a></li>
                    </ContactList>

                    <strong>{infos.text}</strong>
                </ContactInfo>
            </Container>
        </ContactSection>
    )
}

const ContactSection = styled.section`
    min-height: 100vh;
    background: url(${bg}) no-repeat right;
    background-size: cover;
`

const Container = styled.div`
    position: absolute;
    width: 100%;
    min-height: 93vh;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.backgroundColor} 1px 0 10px;

    @media (max-width: 768px) {
        display: flex;
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

const Img = styled.div`
    background: url(${img}) no-repeat;
    background-size: contain;
    background-position: center;

    @media (max-width: 768px) {
        display: none;
    }
`

const ContactInfo = styled.div`
    display: flex;
    align-items: center;
    strong {
        width: 30%;
        text-align: center;
        letter-spacing: .5px;
        line-height: 20px;
    }

    @media (max-width: 930px) {
        scale: .8;
        flex-direction: column;
        justify-content: space-evenly;

        strong {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        padding: 30px 80px;
        scale: 1;
    }
`

const ContactList = styled.ul`
    /* background-color: red; */
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 50%;

    li {
        align-self: flex-start;
        padding: 10px;
    }
    li:hover {
        background-color: ${(props) => props.theme.color};
        border-radius: 10px;
        color: ${(props) => props.theme.backgroundColor};
        scale: 1.1;
        transition: ease-in-out 0.4s;
    }
    svg {
        margin-right: 8px;
    }

    @media (max-width: 930px) {
        font-size: 18px;
    }

    @media (max-width: 768px) {
        li {
            align-self: center;
            width: 150px;
            font-size: 16px;
        }
    }
`

export { MyContact }