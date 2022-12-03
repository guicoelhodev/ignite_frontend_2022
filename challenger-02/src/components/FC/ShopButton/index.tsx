import React from "react";
import * as S from "./style";

import { Button } from "../../UI/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const ShopButton: React.FC = () => {
  return (
    <S.Container>
      <Button bg="yellow-light" color="yellow-dark">
        <AiOutlineShoppingCart />
      </Button>

      <span>8</span>
    </S.Container>
  );
};
