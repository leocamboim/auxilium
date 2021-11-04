import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input{
        border: 0;
        outline: 0;
        font-family: 'Amatic SC', cursive;
        /* font-family: 'Roboto', sans-serif;  */
    }

    ul, li{
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    :root {
        --primary: #3B454A;
        --primary-darker: rgba(59,69,74,.96);
        --secondary: #42bde4;
        --tertiary: #E35981;
        --quaternary: #E3D62B;
        --quinary: #393d42;
        --senary: #828386;
    
        --white: #ffffff;
        --gray: #8a8c90;
        --chat-input: rgb(64,68,75);
        --symbol: #74777a;
    
        --notification: #D33A4B;
        --discord: #6e86d6;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;
    
        --link: #5d80d6;

        --leozin: #917CFF;
    }
`;