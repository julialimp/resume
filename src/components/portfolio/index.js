import { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { getInfos } from "../../services/get-infos"
import { PortfolioSection, TextItem } from "../../styles/portoflio-style"

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

export { MyPorfolio }