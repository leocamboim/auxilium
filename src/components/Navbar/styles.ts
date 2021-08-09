import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    width: 100%;
    background-color: var(--primary);
    display: flex;

    -webkit-box-shadow: 0px -1px 20px 9px rgba(0,0,0,0.59); 
    box-shadow: 0px -1px 20px 9px rgba(0,0,0,0.59);

    justify-content: space-between;

    padding:0 25px;

    ul {
        padding: 10px 0;
        display:flex;
        }

    li {
        font-size: 20px;
        font-weight: 600;
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
    }
`
export const Logo = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0;
`;