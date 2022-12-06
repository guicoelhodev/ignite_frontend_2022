import styled from "styled-components";
import { defaultStyleTheme } from "../../../styles/default";

interface IButtonStyle {
  bg?: keyof typeof defaultStyleTheme;
  color?: keyof typeof defaultStyleTheme;
}

export const Container = styled.button<IButtonStyle>`
  background-color: ${({ theme, bg }) =>
    bg ? theme[bg] : theme["base-button"]};

  border: 1px solid
    ${({ theme, bg }) => (bg ? theme[bg] : theme["base-button"])};

  border-radius: 5px;
  padding: 0.4rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    color: ${({ theme, color }) => (color ? theme[color] : theme["base-text"])};
  }

  svg {
    fill: ${({ theme, color }) => (color ? theme[color] : theme["base-text"])};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
