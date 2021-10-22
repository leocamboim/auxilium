import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    width: 100%;
    background-color: var(--primary);
    display: flex;

    -webkit-box-shadow: 0px -1px 20px 9px rgba(0,0,0,0.59); 
    box-shadow: 0px -1px 20px 9px rgba(0,0,0,0.59);

    justify-content: space-between;
    
    padding:0 40px;
    
    ul {
        padding: 10px 0;
        display:flex;
    }
    
    li {
        font-size: 25px;
        /* font-weight: BOLD;  */
        display: flex;
        
        color: var(--white);
        transition: ease-in 0.2s;
        
        margin-left: 30px;
        align-items:center;
    }
    
    li:hover{
        opacity: 85%;
        cursor: pointer;
    }
    
    .LinkNav{
        text-decoration: none;
        color: var(--white);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`
export const Logo = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0;
`;