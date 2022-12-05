import styled from "styled-components";

export const Container = styled.button`
    width: 130px;
    height: 42px;
    border: solid 1px #121318;
    border-radius: 8px;
    color: #392919;
    background: transparent;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    margin-left: 25px;
    transition: 1.2s ease ;

    &:hover{
        color: #F8FDFF;
        background: #121318;
        box-shadow: 0 0 17px 0px #000;
    }
`