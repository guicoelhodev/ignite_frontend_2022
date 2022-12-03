import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;

    position: absolute;
    top: 0;
    right: 0;

    display: grid;
    place-items: center;
    transform: translate(8px, -5px);

    color: ${(props) => props.theme.white};
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;
