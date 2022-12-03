import React, { ReactNode } from "react";
import * as S from "./style";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};
