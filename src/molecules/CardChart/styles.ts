import styled from "styled-components";


export const Container = styled.div`
    position: absolute;
    width: 210px;
    height: 210px;
    border-radius: 18px;
    background: #F8FDFF;
    box-shadow: 0px 17.5px 28px rgba(0,0,0,0.1);
    left: 40px;
    padding: 33.6px 24.5px;
    opacity: 0;
    animation: showOnPage 1.2s linear forwards;
    bottom: -30px;

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


    @keyframes showOnPage {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
            bottom: 0;
        }
    }
`
function generateSpan(){
    const amountBars = [...Array(12).keys()]
        let styleSpan: any = []

    amountBars.forEach(item => {
        styleSpan.push(`
            div:nth-child(${item})  {
                height: 91px;
                width: 3px;
                background: #EFF3FE;
                border-radius: 4px;
                display: flex;
                align-items: flex-end;

                    span{
                        background: #CC914F;
                        display: block;
                        height: 0px;
                        max-height: ${Math.ceil(Math.random() * 100)}px;
                        animation: animationHeight 2s linear forwards;
                        width: 3.8px;
                        border-radius: 5px;
                    }
                }

        `)
    })

    return styleSpan.join('')
}

export const Chart = styled.div`
    margin-top: 28px;

    ${generateSpan()}

    @keyframes animationHeight {
        from{
            height: 0px;
        }
        to{
            height: 90px;
        }
    }
    
`