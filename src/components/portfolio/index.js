import { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"
import { getInfos } from "../../services/get-infos"
import bgImg from "../../assets/lamp.jpg"


const MyPorfolio = () => {
    const [projects, setProjects] = useState([])
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        async function fetchData() {
            const info = await getInfos('portfolio')
            setProjects(info.data.projects)
        }
        fetchData()
    }, [])

    return (
        <PortfolioSection className="projects" theme={theme}>
            {projects.map((project) => {
                return (
                    <>
                            <TextItem>
                                <h3>{project.title}</h3>
                                <p>{project.text} </p>
                                <a href={project.link} target="_blank" rel="noreferrer">Online Page</a>
                                <a href={project.reository} target="_blank" rel="noreferrer">Repository</a>
                            </TextItem>
                            <div style={{ background: `url(${project.image}) center center no-repeat`, backgroundSize: "contain" }} />
                    </>
                )
            })}

        </PortfolioSection>

    )
}

const PortfolioSection = styled.section`
    background-color: ${(props) => props.theme.backgroundColor};
    /* color: ${(props) => props.theme.color}; */
    color: black;
    padding-top: 45px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-auto-rows: auto;


    div {
        width: 50vw;
    }

    div:nth-child(3) {
        grid-column: 2;
        grid-row: 2;
    }

    div:nth-child(7) {
        grid-column: 2;
        grid-row: 4;
    }
`

const TextItem = styled.div`
    padding: 16.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: url(${bgImg}) center;
    background-size: contain;

    h3 {
        /* font-weight: 700; */
        /* font-size: 4rem; */
    }

    p {
        /* font-size: 1.8rem; */
        /* font-weight: 400; */
        margin: 30px 0;
    }

    a {
        /* font-size: 1.6rem; */
        cursor: pointer; 
        align-self: flex-start;
    }

    a:hover {
        font-weight: bold;
    }
`


export { MyPorfolio }