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
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--primary);
  width: 30vw;
  margin-top: 10vh;
  border-radius: 10px;

  box-shadow: 2px 7px 8px 2px rgba(0,0,0,0.5);

`

export const Input = styled.input`
  width: ${props => props.width ? props.width : "90%"};
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

  border-radius: 0.3rem;
  margin: 2rem 0;
  float: right;
  border-radius: 3px;
  box-shadow: 1px 4px 5px 1px rgba(0,0,0,0.5);

  transition: ease-in 0.3s;
  cursor: pointer;

    &:hover{
      opacity: .7;
    }
`
export const Title = styled.h1`
  font-size: 54px;
  font-weight: 500;

  color: var(--white);
  
  padding: 2vh 0;
`

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--primary);
  width: 30vw;
  margin-top: 10vh;
  border-radius: 10px;

  box-shadow: 2px 7px 8px 2px rgba(0,0,0,0.5);

`

export const Wrap = styled.div`
  width: 75%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`
