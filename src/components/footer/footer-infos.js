import styled from "styled-components"

const Footer = () => {
    return (
        <FooterStyle className="resume-header">
            <p>Phone number: +55 51 9 9692-2234</p>
            <p>Email: julia.limp@hotmail.com</p>
            <p>Location: Brazil - Porto Alegre/RS</p>
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`
    display: flex;
    justify-content: space-around;
    background-color: #0101015a;
    color: #ffffff;
    font-size: 12px;
    padding: 1px;
    position: absolute;
    width: 100%;
    bottom: 0;
    max-height: 3vh;
`

export { Footer }