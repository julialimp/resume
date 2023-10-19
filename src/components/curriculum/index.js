import { useContext } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import pdfFIle from "../../assets/CV Julia Limp 2023.pdf"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

const CV = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <CVSection theme={theme}>
            <Div theme={theme}>
                <a href={pdfFIle} target="_blank" rel="noreferrer">
                    <p>Open the document</p>
                    <Document file={pdfFIle}>
                        <Page pageNumber={1}></Page>
                    </Document>
                </a>
            </Div>
        </CVSection>

    )
}

const CVSection = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.backgroundColor};
`

const Div = styled.div`
    width: 700px;
    max-height: 80vh;
    margin: 50px;

p {
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    letter-spacing: 4px;
    padding: 15px;
    color: ${(props) => props.theme.color};
}
`

export { CV }