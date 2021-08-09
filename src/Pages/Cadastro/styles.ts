import styled from "styled-components";

export const Container = styled.div`
  /* background-color: var(--primary); */
  display: flex;
  align-items: center;
  justify-content: center;

  .option {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    width: 50vw;
    height: 100vh;
    text-align: center;
    color: var(--white);
    transition: ease 0.9s;
    cursor: pointer;

    .option-icon {
        font-size: 15rem;  
        transition: ease .5s;          
    }

    h2 {
        font-size: 5rem;
        transition: ease .5s;  
    }

    &:hover {
      background-color: var(--white);
      color: var(--primary);
    }

    &:hover .option-icon {
        font-size: 18rem;
    }

    &:hover h2 {
        font-size: 6rem;
    }
  }

  .border {
    width: .1vw;
    background-color: var(--white);
  } 
`; 

export const Form = styled.form`
/* visibility: hidden; */
background-color: var(--primary);
width: 60vw;
height: 100vh;
padding-top: 20vh;
`

export const FormControl = styled.div`
display: flex;
justify-content: center;
width: 90%;
padding-left: 10%;
`

export const Input = styled.input`
width: ${props => props.width ? props.width : "100%"};
height: 6rem;
padding: 0.5rem;
margin: 0.5rem;
opacity: .9;
border-radius: 3px;
`

export const Button = styled.button`
width: 15rem;
height: 5rem;
background-color:var(--white);
border-radius: 0.3rem;
margin: 0.5rem 6.275vw 0 0;
float: right;
/* margin-left: auto; */

  &:hover{
    opacity: .7;
  }
`
