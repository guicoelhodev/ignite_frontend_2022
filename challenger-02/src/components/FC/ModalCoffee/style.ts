import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`

from { opacity: 0}
to { opacity: 1 }
`;

export const Container = styled.div`
  z-index: 1;
  background-color: ${(props) => props.theme.white};
  position: absolute;
  right: 0;
  top: 6rem;

  padding: 1rem;
  border-radius: 5px;
  width: 100%;
  max-width: 20rem;
  height: 22rem;
  animation: ${fadeIn} 0.3s ease-in;
  box-shadow: ${(props) => props.theme["default-box-shadow"]};

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    color: ${(props) => props.theme["yellow-dark"]};

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
export const LinKButton = styled.button`
  border-radius: 5px;
  width: 100%;
  background-color: ${(props) => props.theme["yellow-dark"]};
  border: 1px solid ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme.white};
  text-decoration: none;
  text-align: center;
  padding: 0.5rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
export const List = styled.ul`
  flex: 1;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  aside {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }
`;

export const CoffeeItem = styled.li`
  position: relative;
  padding: 0.6rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme["yellow-light"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;

  img {
    height: 2.5rem;
    aspect-ratio: 1/1;
  }
  article {
    flex: 1;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    aside {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      align-items: flex-end;
      width: auto;

      span {
        font-size: 0.9rem;
      }

      span:nth-child(2) {
        color: ${(props) => props.theme.yellow};
        font-weight: 700;
      }
    }
  }
`;

export const DeleteCoffee = styled.button`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme["yellow-dark"]};
  background-color: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme.white};

  display: grid;
  place-items: center;

  width: 1.5rem;
  aspect-ratio: 1/1;
`;
