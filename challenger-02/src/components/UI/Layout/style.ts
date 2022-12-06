import styled, { keyframes } from "styled-components";

const fadeInPage = keyframes`
from {
  opacity: 0;
} to {
  opacity: 1;
}
`;

export const Container = styled.div`
  animation: ${fadeInPage} 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);

  width: 100%;
  min-height: 100vh;
  height: 100%;
  max-width: 74rem;
  margin: 0 auto;
  padding: 1rem;

  background-color: inherit;

  display: flex;
  flex-direction: column;
`;
