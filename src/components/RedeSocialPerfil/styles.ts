import styled from 'styled-components';
import { FacebookCircle, InstagramAlt } from 'styled-icons/boxicons-logos';

export const CardInfoPerfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    background-color: var(--primary);
    width: 50vw;
    margin-left: 3vh;
    padding: 2vw;
    border-radius: 10px;
    
    box-shadow: 2px 7px 8px 2px rgba(0,0,0,0.5);
`

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const Facebook = styled(FacebookCircle)`
    width: 5vw;
    height: 5vw;
    color: var(--white);
`

export const Instagram = styled(InstagramAlt)`
    width: 5vw;
    height: 5vw;
    color: var(--white);
`

export const Input = styled.input`
    width: 17.5vw;
    height: 6rem;

    padding: 0.5rem;     
    margin: 0.5rem;

    opacity: .9;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    border-radius: 3px;
    box-shadow: 1px 4px 5px 1px rgba(0,0,0,0.5);
`

export const Button = styled.button`
    width: 15rem;
    height: 5rem;
    
    color: var(--white);
    font-weight: bold;
    background-color:var(--secondary);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    border-radius: 0.3rem;
    padding: 0.5rem;     
    margin: 0.5rem;
    border-radius: 3px;
    box-shadow: 1px 4px 5px 1px rgba(0,0,0,0.5);

    transition: ease-in 0.3s;
    cursor: pointer;

    &:hover{
        opacity: .7;
    }
`