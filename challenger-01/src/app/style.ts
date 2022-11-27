import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;

  position: relative;
`;

export const Github = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  text-decoration: none;

  p {
    font-weight: 600;
    color: var(--gray-300);
    font-size: 1.5rem;
  }

  svg {
    fill: var(--gray-300);
    width: 30px;
    height: 30px;
  }

  position: absolute;
  bottom: 0;
  right: 0;
`;
