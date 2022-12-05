import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;

    > div {
        width: 50%;
    }
    h1{
        font-size: 56px;
        font-weight: bold;
        color:  #000;
        background: linear-gradient(to bottom, #392919,#CC914F);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    h6{
        font-size: 16px;
        color: rgba(0, 0, 0, 0.7) ;
        font-weight: normal;
        padding-right: 150px;
        margin-top: 20px;
    }
`
 
export const ColumImage = styled.div`
    text-align: right;
    position: relative;

    img{
        height: 370px;
    }
`