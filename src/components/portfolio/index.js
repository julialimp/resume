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
                        <TextItem theme={theme}>
                            <div>
                                <h3>{project.title}</h3>
                                <p>{project.text} </p>
                                <a href={project.link} target="_blank" rel="noreferrer">Online Page</a>
                                <a href={project.repository} target="_blank" rel="noreferrer">Repository</a>
                            </div>
                        </TextItem>
                        <div style={{ background: `url(${project.image}) center center no-repeat`, backgroundSize: "cover" }} />
                    </>
                )
            })}

        </PortfolioSection>

    )
}

const PortfolioSection = styled.section`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    color: black;
    padding-top: 45px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    max-width: 1920px;
    
    div:nth-child(3) {
        grid-column: 2;
        grid-row: 2;
    }

    div:nth-child(7) {
        grid-column: 2;
        grid-row: 4;
    }
    

    @media (max-width: 930px) {
        display: flex;
        flex-direction:  column;
        align-items: center;

        div {
            width: 650px;
            height: 430px;
        }
    }

    @media (max-width: 678px) {
        div {
            width: 450px;
            height: 300px;
        }
    }
`

const TextItem = styled.div`
    max-height: 435px;
    display: flex;

    div {
        background-color: ${(props) => props.theme.overlay};
        color: ${(props) => props.theme.color};
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 78px;
        font-size: 14px;
        
        /* border-radius: 8px; */
    }

    div h3 {
        font-weight: 700;
    }

    div p {
        margin: 30px 0;
        line-height: 26px;
        text-align: justify;
    }

    div a {
        /* font-size: 1.6rem; */
        cursor: pointer; 
        align-self: flex-start;
    }

    div a:hover {
        font-weight: 700;
        scale: 1.1;
        transition: ease-in-out .3s;
    }

    @media (max-width: 678px) {
        padding: 50px;
        
        div {
            width: 450px;
            height: 300px;
        }
    }
`


export { MyPorfolio }