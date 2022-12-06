import React, { useContext } from "react";
import * as S from "./style";

import Logo from "../../../assets/img/logo.png";
import { Button } from "../Button";
import { HiLocationMarker } from "react-icons/hi";
import { ShopButton } from "../../FC/ShopButton";
import { CoffeeContext } from "../../../context/coffeeContext";
import { ModalCoffee } from "../../FC/ModalCoffee";

export const Header: React.FC = () => {
  const { showItemsModal } = useContext(CoffeeContext);
  return (
    <S.Container>
      <img
        src={Logo}
        alt="logo que indica que a empresa é uma empresa de delivery de café"
      />

      <section>
        <Button bg="purple-light" color="purple-dark">
          <p>São Paulo/SP</p>
          <HiLocationMarker />
        </Button>
        <ShopButton />
      </section>

      {showItemsModal && <ModalCoffee />}
    </S.Container>
  );
};
