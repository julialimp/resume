import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    padding: 5px;
    width: 50px;
    font-size: 17px;
    border-radius: 20px;
    border: solid 1px;
    cursor: pointer;
    line-height: 17px;
    justify-content: ${(props) => props.theme.toggler};
    color: #222f28;
    
    &:hover {
        scale: 1.08;
        transition: ease-in-out .3s;
    }

    @media (max-width: 768px) {
        font-size: .75rem;
    }
`