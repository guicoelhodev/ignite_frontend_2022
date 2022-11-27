import React, { useContext } from "react";
import Logo from "../../assets/logo.png";
import { ListContext, IContextProps } from "../../context/ListContext";
import { AddTask } from "../AddTask";

import * as S from "./style";

export const Header: React.FC = () => {
  return (
    <S.Container>
      <header>
        <S.LogoImage src={Logo} alt="rocketseat logo todo" />
        <AddTask />
      </header>
    </S.Container>
  );
};
