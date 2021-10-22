import styled from "styled-components";
type perfilOpcaoProps = {
    background?: boolean;
};

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`


export const PerfilOptions = styled.div <perfilOpcaoProps>`
    width: 20vw;
    height: 6rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background-color: ${props => props.background ? "var(--notification)" : "var(--primary)"};

    color: var(--white);
    padding:0 3rem;
    margin-bottom: 1.65rem;
    border-radius: 10px;
    
    font-size: 23px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    box-shadow: 2px 7px 8px 2px rgba(0,0,0,0.5);
    cursor: pointer;
`

// export const CardPerfil = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: left;
    
//     background-color: var(--primary);
//     width: 50vw;
//     margin-left: 3vh;
//     padding: 2vw;
//     border-radius: 10px;
    
//     box-shadow: 2px 7px 8px 2px rgba(0,0,0,0.5);
// `

// export const  Profile = styled.div`
//     display: flex;
// `

// export const Foto = styled.div`
//     width: 125px;
//     height: 125px;
//     border-radius: 50%;

//     background-color: var(--gray);
// `

// export const  UserData = styled.div`
//     margin-left: 15px;

//     display: flex;
//     flex-direction: column;

//     > strong {
//         color: var(--white);
//         font-size: 30px;
//         display: block;
//     }

//     > span {
//         color: var(--gray);
//         font-size: 13px;
//     }
// `


// export const  Bio = styled.div`
//     margin-top: 10px;

//     display: flex;
//     flex-direction: column;

//     > strong {
//         color: var(--white);
//         font-size: 30px;
//         display: block;
//     }

//     > span {
//         color: var(--gray);
//         font-size: 16px;
//     }
// `

// export const  Info = styled.div`
//     display: flex;
//     justify-content: space-between;    
//     margin-top: 10px;
// `

// export const  Email = styled.div`
//     display: flex;
//     flex-direction: column;

//     > strong {
//     color: var(--white);
//     font-size: 17px;
//     display: block;
//     }

//     > span {
//     color: var(--gray);
//     font-size: 15px;
//     }

// `

// export const  Tel = styled.div`
//     display: flex;
//     flex-direction: column;

//     > strong {
//     color: var(--white);
//     font-size: 17px;
//     display: block;
//     }

//     > span {
//     color: var(--gray);
//     font-size: 15px;
//     }
// `

// export const Data = styled.div`
//     display: flex;
//     flex-direction: column;

//     > strong {
//     color: var(--white);
//     font-size: 17px;
//     display: block;
//     }

//     > span {
//     color: var(--gray);
//     font-size: 15px;
//     }
// `

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 9vh;
`
// export const Edit = styled.div`
//     color: var(--white);
//     font-size: 17px;
//     margin-left: auto;

//     cursor: pointer;
// `