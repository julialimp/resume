import { Link } from "react-router-dom"
import styled from "styled-components"

const Header = () => {
    return (
        <HeaderStyle className="resume-header">
            <Link to="/">
                Home (header)
            </Link>
            <h1>Julia Limp de Almeida</h1>
            <button>Theme</button>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 3px 10px;
    align-items: center;
    max-height: 7vh;
    background-color: #0101019a;
    color: #ffffff
`

export { Header }