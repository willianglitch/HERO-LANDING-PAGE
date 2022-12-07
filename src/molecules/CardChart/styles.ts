import styled from "styled-components";


export const Container = styled.div`
    position: absolute;
    width: 210px;
    height: 210px;
    border-radius: 18px;
    background: #F8FDFF;
    box-shadow: 0px 17.5px 28px rgba(0,0,0,0.1);
    bottom: 10px;
    left: 40px;
    padding: 33.6px 24.5px;

    >div{
        display: flex;
        justify-content: space-between;
        text-align: center;
    }
    >div strong{
        font-size: 18px;
        font-weight: 600;
    }

    >div img{
        height: 18px;
    }
`


export const Chart = styled.div`
    margin-top: 28px;

    div {
        height: 91px;
        width: 3px;
        background: #EFF3FE;
        border-radius: 4px;
        display: flex;
        align-items: flex-end;

        span{
            background: #CC914F;
            display: block;
            height: 45px;
            width: 3.8px;
            border-radius: 5px;
        }
    }
`