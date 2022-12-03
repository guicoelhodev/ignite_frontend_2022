import React, { ReactNode } from "react";
import { Header } from "../Header";
import * as S from "./style";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <S.Container>
      <Header />
      {children}
    </S.Container>
  );
};
