import styled from "styled-components"

const ButtonChangeTheme = (props) => {
    return (
        <Button {...props} />
    )
}

const Button = styled.button`
    padding: 8px;
    border-radius: 20px;
    border: solid 1px white;
    cursor: pointer;
    color: black;

    &:hover {
        scale: 1.08;
        transition: ease-in-out .3s;
    }
`

export { ButtonChangeTheme }