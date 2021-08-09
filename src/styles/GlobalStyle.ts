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

        font-family: 'Roboto', sans-serif; 
    }

    ul, li{
        list-style: none;
    }

    :root {
        --primary: #1984B6;
        --secondary: #2f3136;
        --tertiary: rgb(32,34,37);
        --quaternary: #292b2f;
        --quinary: #393d42;
        --senary: #828386;
    
        --white: #ffffff;
        --gray: #8a8c90;
        --chat-input: rgb(64,68,75);
        --symbol: #74777a;
    
        --notification: #f84a4b;
        --discord: #6e86d6;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;
    
        --link: #5d80d6;

        --leozin: #917CFF;
    }
`;