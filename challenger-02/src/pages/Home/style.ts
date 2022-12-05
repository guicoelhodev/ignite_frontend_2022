import styled from "styled-components";

interface IIconItem {
  bgColor: string;
}
export const Container = styled.div`
  width: 100%;
`;

export const HomeAppresentation = styled.section`
  display: flex;
  align-items: center;

  h1 {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
`;

export const IconList = styled.footer`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const IconItem = styled.article<IIconItem>`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  span {
    display: grid;
    place-items: center;
    padding: 0.6rem;
    border-radius: 50%;
    background-color: ${(props) => props.bgColor};
  }
  svg {
    fill: ${(props) => props.theme.white};
  }
`;

export const CoffeeList = styled.section`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;
