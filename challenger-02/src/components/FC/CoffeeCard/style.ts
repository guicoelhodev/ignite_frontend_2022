import styled from "styled-components";

export const Container = styled.li`
  position: relative;
  width: 100%;
  max-width: 16.25rem;

  background-color: ${(props) => props.theme["base-card"]};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 7rem 1rem 1rem 1rem;
  margin-top: 2rem;
  gap: 0.5rem;

  img {
    top: 0;
    transform: translateY(-30px);
    aspect-ratio: 1/1;
    width: 8rem;
    position: absolute;
  }

  border-radius: 8px 40px 8px 40px;

  article {
    display: flex;
    justify-content: center;
    gap: 0.6rem;
    flex-wrap: wrap;
    width: 100%;
  }

  .description {
    font-size: 0.9rem;
    text-align: center;
  }
`;

export const Badge = styled.span`
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 0.5rem;
  border-radius: 8px;
  font-weight: 700;

  font-size: 0.8rem;
`;

export const BuyCoffeeContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  button {
    svg {
      width: 20px;
    }
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.3rem;

  p {
    font-family: "Baloo 2", cursive;
    font-size: 1.4rem;
  }

  span {
    margin-bottom: 8px;
  }
`;

export const QuantityCoffee = styled.div`
  display: flex;
  align-items: center;
  width: 4rem;
  //background-color: ${(props) => props.theme["base-button"]};
  p {
    text-align: center;
  }

  button {
    flex: 1;
    background-color: inherit;
    font-size: 1.2rem;
    border: 0;
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
