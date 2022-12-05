import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 90px;
    left: 80px;
    background: #534F46;
    color: #F8FDFF;
    width: 154px;
    height: 78px;
    border-radius: 12px;
    text-align: left;
    padding: 12px;
    border: solid 1px #F8FDFF;

    small{
        font-size: 14px;
    }
    div{
        display: flex;
        align-items: center;

    }
    span{
        display: block;
        font-weight: lighter;
        font-size: 18px;
        margin-right: 5px;

        i {
            vertical-align: middle;
        }
    }
    >div img{
        height: 20px;
    }
`