import React, { ReactNode } from "react";
import { defaultStyleTheme } from "../../../styles/default";
import * as S from "./style";

interface IButtonProps {
  bg?: keyof typeof defaultStyleTheme;
  color?: keyof typeof defaultStyleTheme;
  children: ReactNode;
  onClick?: any;
}

export const Button: React.FC<IButtonProps> = ({
  bg,
  children,
  color,
  onClick,
}) => {
  return (
    <S.Container bg={bg} color={color} onClick={onClick}>
      {children}
    </S.Container>
  );
};
