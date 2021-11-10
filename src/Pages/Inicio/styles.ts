import styled from "styled-components";
import { HomeHeart } from "styled-icons/boxicons-solid";
import { HandHoldingUsd, Users } from "styled-icons/fa-solid";
import family from '../../assets/family.jpg'; 

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Opacity = styled.div`
    width: 100%;
    height: 55vh;
    background-image: url(${family});
    /* background-color: var(--primary-darker); */
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 62px;
    
    h1 {
        font-size: 48px;
        color: var(--white);
    }
    
    button {
        width: 15rem;
        height: 5rem;
        color: var(--white);
        background-color: var(--secondary);
        margin: 2rem 0;
        border-radius: 3px;
        box-shadow: 1px 4px 5px 1px rgb(0, 0, 0, 50%);
        cursor: pointer;
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
export const Wrap = styled.div`
    display: flex;
    flex-direction: column;

    margin: 5rem 10rem;

    span {
        font-size: 50px;
    }

    strong {
        font-size: 35px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 2rem 15rem;
    }
    `

export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    
    text-align: center;
    
    span {
        font-size: 35px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: 2rem;
    }
`

export const CadastroIcon = styled(Users)`
    height: 30vh;
    width: auto;
`

export const InstIcon = styled(HomeHeart)`
    height: 30vh;
    width: auto;    
`

export const ApadIcon = styled(HandHoldingUsd)`
    height: 30vh;
    width: auto;
`