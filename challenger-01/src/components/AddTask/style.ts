import styled from "styled-components";

export const Container = styled.section`

  width:100%;
  max-width: 50rem;
  padding:1rem;

  display: flex;
  gap:1rem;

  transform: translateY(50%);

  input {
    background-color: var(--gray-400);
    border:1px solid var(--gray-400);
    width:100%;
    padding:1rem 0;
    padding-left: 0.5rem;
    border-radius: 5px;
    font-size: 1rem;
    color: var(--gray-200);

    :focus {
      outline: 2px solid var(--purple-dark);
    }
  }

  button {
    cursor: pointer;
    background-color: var(--blue-dark);
    border: 1px solid var(--blue-dark);
    border-radius: 8px;
    color: var(--gray-100);

    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding:0 1rem;
    font-size: 1rem;

    transition: all 0.3s ease-in;
    :hover {
      filter: brightness(1.2);
    };
    
    :active{
      filter: brightness(0.95);
    };
  }
`