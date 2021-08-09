import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--white);
    height: 100%;

    display: flex;
    flex-direction: column;
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0;
`

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 230px;
    background-color: var(--primary);

    justify-content: space-around;
    align-items: center;

    display: inline-flex;

    span {
        font-size: 18px;
        color: var(--white);
    }
`

export const SponsorLeft = styled.div`
    width: 384px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Icons = styled.div``

export const Center = styled.div`
    width: 384px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NotificationsRight = styled.div`
    width: 384px;
    display: flex;    
    flex-direction: column;
    align-items: center;
`