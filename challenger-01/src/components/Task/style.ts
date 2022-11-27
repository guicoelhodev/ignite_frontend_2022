import styled from "styled-components";

interface IStyled {
  completed: boolean;
}
export const Container = styled.li<IStyled>`
  margin-top: 0.5rem;
  list-style: none;
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--gray-500);

  display: flex;
  gap: 1rem;

  p {
    flex: 1;
    color: ${({ completed }) =>
      completed ? "var(--gray-300)" : "var(--gray-100)"};

    text-decoration: ${({ completed }) =>
      completed ? "line-through" : "none"};
  }

  button {
    cursor: pointer;
  }
`;

export const Checkbox = styled.button<IStyled>`
  width: 25px;
  height: 25px;
  border-radius: 50%;

  background-color: ${({ completed }) =>
    completed ? "var(--purple)" : "var(--gray-500)"};

  border: 2px solid;
  border-color: ${({ completed }) =>
    completed ? "var(--purple)" : "var(--blue)"};

  display: grid;
  place-items: center;

  svg {
    fill: var(--gray-100);
    width: 10px;
    height: 10px;
  }
`;

export const ExcludeButton = styled.button`
  background-color: inherit;
  border: 1px solid transparent;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--gray-300);
  }
`;
