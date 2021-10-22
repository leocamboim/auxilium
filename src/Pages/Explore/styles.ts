import styled from "styled-components";
import katarina from '../../assets/katarina.jpg'; 

export const Container = styled.div`
    height: 100%;
    
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-content: center;
`

export const Card = styled.div`
    width: 45vw;
    height: 35rem;
    
    background-image: url(${katarina});
    opacity: .85;
    /* background-color: var(--primary-darker); */
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    
    padding :3rem;
    margin-bottom: 1.65rem;
    
    border-radius: 10px;
    
    font-size: 23px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--white);
    
    box-shadow: 2px 7px 8px 2px rgba(0,0,0,0.5);

    h1 {
        margin-right: auto;
    }
    
    p {
        display: flex;
        justify-content: space-between;
    }

    span {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    cursor: pointer;

    transition: ease-in .5s;
    
    :hover{
        opacity: 1;
    }
`