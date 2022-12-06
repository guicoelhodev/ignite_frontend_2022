import React, { useContext, useState } from "react";
import * as S from "./style";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "../../UI/Button";
import { CoffeeContext, ICoffeeContext } from "../../../context/coffeeContext";
import { addNewCoffeAction } from "../../../reducers/coffeeReducer/actions";
import { formatCoffeePrice } from "../../../utils/formatCofeePrice";

interface ICoffeeCard {
  title: string;
  description: string;
  unity_price: number;
  image: string;
  status: string[];
}

export const CoffeeCard: React.FC<ICoffeeCard> = (props) => {
  const { coffeeList, dispatchCoffeeList } = useContext(
    CoffeeContext
  ) as ICoffeeContext;

  const [quantityItem, setQuantityItem] = useState(0);

  const handleQuantity = (type: "add" | "remove") => {
    if (type === "add") {
      setQuantityItem((prev) => prev + 1);
    } else {
      setQuantityItem((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <S.Container>
      <img src={props.image} alt={`${props.title} coffee`} />

      <article>
        {props.status.map((badge) => (
          <S.Badge>{badge.toLocaleUpperCase()}</S.Badge>
        ))}
      </article>

      <h3>{props.title}</h3>

      <p className="description">{props.description}</p>

      <S.BuyCoffeeContainer>
        <S.Price>
          <span>R$</span>
          <p>{formatCoffeePrice(props.unity_price)}</p>
        </S.Price>

        <S.QuantityCoffee>
          <button onClick={() => handleQuantity("remove")}>-</button>
          <p>{quantityItem}</p>
          <button onClick={() => handleQuantity("add")}>+</button>
        </S.QuantityCoffee>
        <Button
          bg="purple-dark"
          color="white"
          disabled={quantityItem === 0 ? true : false}
          onClick={() => {
            dispatchCoffeeList(
              addNewCoffeAction({
                name: props.title,
                quantity: quantityItem,
                unity_price: props.unity_price,
                image: props.image,
              })
            );
          }}
        >
          <AiOutlineShoppingCart />
        </Button>
      </S.BuyCoffeeContainer>
    </S.Container>
  );
};
