import styled from "styled-components"

export const Button = styled.button`
    background-color: transparent;
    border: 2px solid #2C2020;
    border-radius: 13px;
    cursor: ${props => props.clicked? "default" : "pointer"};
    font-size: 18px;
    font-weight: 400;
    height: 60px;
    margin-top: 30px;
    width: 150px;
    

    &:hover{
        background: ${props => props.clicked? "" : "#2C2020"};
        color: ${props => props.clicked? "" : "#B79999"};
    }


`