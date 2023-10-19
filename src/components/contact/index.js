import styled from "styled-components"
import img from "../../assets/picture.jpg"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { useState } from "react"
import { useEffect } from "react"
import { getInfos } from "../../services/get-infos"
import { FaGithub, FaLinkedin, FaMailBulk, FaMailchimp, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"

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
            <Img />
            <ContactInfo>
                <ContactList>
                    {/* <FontAwesomeIcon icon="fa-phone fa-phone" /> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-phone" /> */}
                   
                    <li><a href={infos.whatsapp} target="_blank" rel="noreferrer"> <FaWhatsapp /> Whatsapp</a></li>
                    <li><a href={infos.phone}><FaPhoneAlt /> Phone</a></li>
                    <li><a href={infos.email}><FaMailBulk /> Email</a></li>
                    <li><a href={infos.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> Linkedin</a></li>
                    <li><a href={infos.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub </a></li>
                </ContactList>
                <p>{infos.text}</p>
            </ContactInfo>

        </ContactSection>

    )
}

const ContactSection = styled.section`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
`

const Img = styled.div`
    background: url(${img}) no-repeat center center;
    background-size: contain;
`

const ContactInfo = styled.div`
    display: flex;
    align-items: center;

    p {
        width: 30%;
        text-align: center;
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
        background-color: white;
        border-radius: 10px;
        color: black;
        scale: 1.1;
        transition: ease-in 0.3s;
    }
    svg {
        margin-right: 8px;
    }
`


export { MyContact }