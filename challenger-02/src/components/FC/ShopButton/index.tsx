import React, { useContext } from "react";
import * as S from "./style";

import { Button } from "../../UI/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CoffeeContext, ICoffeeContext } from "../../../context/coffeeContext";

export const ShopButton: React.FC = () => {
  const { coffeeList, setShowItemsModal } = useContext(CoffeeContext);

  return (
    <S.Container>
      <Button
        bg="yellow-light"
        color="yellow-dark"
        onClick={() => setShowItemsModal((prev) => !prev)}
      >
        <AiOutlineShoppingCart />
      </Button>

      <span>{coffeeList.length}</span>
    </S.Container>
  );
};
