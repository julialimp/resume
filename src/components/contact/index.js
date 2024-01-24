import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { useState } from "react"
import { useEffect } from "react"
import { getInfos } from "../../services/get-infos"
import { FaGithub, FaLinkedin, FaMailBulk, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"
import { ContactSection, Container, Img, ContactInfo, ContactList } from "../../styles/contact-style"
import { Overlay } from "../../styles/global-style"


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

export { MyContact }