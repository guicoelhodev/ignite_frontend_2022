import React, { ReactNode } from "react";
import { defaultStyleTheme } from "../../../styles/default";
import * as S from "./style";

interface IButtonProps {
  bg?: keyof typeof defaultStyleTheme;
  color?: keyof typeof defaultStyleTheme;
  children: ReactNode;
  onClick?: any;
  disabled?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  bg,
  children,
  color,
  onClick,
  disabled,
}) => {
  return (
    <S.Container bg={bg} color={color} onClick={onClick} disabled={disabled}>
      {children}
    </S.Container>
  );
};
