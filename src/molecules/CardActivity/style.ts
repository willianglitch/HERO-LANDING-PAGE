import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 10px;
    left: 80px;
    background: #534F46;
    color: #F8FDFF;
    width: 154px;
    height: 78px;
    border-radius: 12px;
    text-align: left;
    padding: 12px;
    border: solid 1px #F8FDFF;
    overflow: hidden;
    animation: showOnPageCard 0.8s linear forwards ;

    small {
        font-size: 14px;
    }
    div {
        display: flex;
        align-items: center;

        span {
        display: block;
        font-weight: lighter;
        font-size: 18px;
        margin-right: 5px;
    }
    }
    i {
        width: 154px;
        height: 78px;
        position: absolute;

        border-radius: 50px;

        &.circle1 {
        background: rgba(255,255,255,0.3);
        top: -30px;
        left: 90px;
        }

        &.circle2 {
        background: rgba(255,255,255,0.2);
        bottom: -40px;
        left: 70px;
        transform: rotate(45deg);
        }

        &.circle3 {
            border: solid 1px rgba(255,255,255,0.5);
            transform: rotate(-74deg);
            top: -70px;
            left: 40px;
        }

        @keyframes showOnPageCard {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
            top: 90px;
        }
    }
    }


    > div img{
        height: 20px;
    }
    

`