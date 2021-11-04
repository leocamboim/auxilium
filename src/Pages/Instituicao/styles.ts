import styled from "styled-components";
import espm from '../../assets/espm-aa.jpg'; 

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImgInst = styled.div`
    width: 100%;
    height: 55vh;
    background-image: url(${espm});
    /* background-color: var(--primary-darker); */
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 62px;    
`

export const Nome = styled.h1`
    width: 50%;
    margin-top: auto;
    margin-left: 5vw;
    font-size: 72px;
    color: var(--white);
    text-shadow: 2px 2px 4px black;
`;

export const About = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--primary-darker);

    padding: 15px 20px;
    text-align: center;

    h1, p {
        color: var(--white);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h1 {
        font-size: 45px;
    }
    
    p {
        font-size: 28px;
    }
`

export const  Apad = styled.div`
    display: flex;
    width: 100%;
    height: 40vh;
`

export const  Tipo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.main};
    color: var(--white);
    
    h1 {
        font-size: 36px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 2rem;
    }

    span {
        font-size: 20px;
        font-weight: 300;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-align: center;
        margin: 0 4rem;
    }
`