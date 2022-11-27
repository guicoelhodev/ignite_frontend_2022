import React, { useContext } from "react";
import Logo from "../../assets/logo.png";
import { ListContext, IContextProps } from "../../context/ListContext";
import { AddTask } from "../AddTask";

import * as S from "./style";

export const Header: React.FC = () => {
  const { search, setSearch } = useContext(ListContext) as IContextProps;

  console.log(search);

  return (
    <S.Container>
      <header>
        <S.LogoImage src={Logo} alt="rocketseat logo todo" />
        <AddTask />
      </header>
    </S.Container>
  );
};
