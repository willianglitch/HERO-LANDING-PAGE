import {createGlobalStyle} from 'styled-components'


const globalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
    }
    html, body, root{
        height: 100%;
        width: 100%;
    }
    body{
        background: #F8FDFF;
        font-family: 'Poppins', sans-serif;
    }
    button{
        background-color : transparent;
        border: none;
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }

`

export default globalStyle