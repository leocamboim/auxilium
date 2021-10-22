import styled from 'styled-components'; 

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
    
    span {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

export const Container = styled.div`
    display: flex;
`

export const Input = styled.input`
    width: 22.5vw;
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