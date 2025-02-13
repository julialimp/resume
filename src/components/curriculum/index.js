import { useContext } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import pdfFIle from "../../assets/support-engineer.pdf"
import { ThemeContext } from "../../contexts/theme-context"
import { CVSection, Div } from "../../styles/cv-style"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

const CV = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <CVSection theme={theme}>
            <Div theme={theme}>
                <a href={pdfFIle} target="_blank" rel="noreferrer">
                    <p>Open document</p>
                    <Document file={pdfFIle}>
                        <Page pageNumber={1}></Page>
                    </Document>
                </a>
            </Div>
        </CVSection>
    )
}

export { CV }