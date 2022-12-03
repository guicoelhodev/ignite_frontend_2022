import React, { ReactNode } from "react";
import { defaultStyleTheme } from "../../../styles/default";
import * as S from "./style";

interface IButtonProps {
  bg?: keyof typeof defaultStyleTheme;
  color?: keyof typeof defaultStyleTheme;
  children: ReactNode;
}

export const Button: React.FC<IButtonProps> = ({ bg, children, color }) => {
  return (
    <S.Container bg={bg} color={color}>
      {children}
    </S.Container>
  );
};
