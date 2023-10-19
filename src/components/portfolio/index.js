import { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"
import { getInfos } from "../../services/get-infos"


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
                            <a href={project.link} target="_blank" rel="noreferrer">See project</a>
                        </TextItem>
                        <div style={{background: `url(${project.image}) center center no-repeat`, backgroundSize: "cover"}}/>
                    </>
                )
            })}

        </PortfolioSection>

    )
}

const PortfolioSection = styled.section`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    padding-top: 43px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-auto-rows: auto;

    div {
        /* border: dashed 2px black; */
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
    padding: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

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
        align-self: flex-start;
    }

    a:hover {
        font-weight: bold;
    }
`


export { MyPorfolio }