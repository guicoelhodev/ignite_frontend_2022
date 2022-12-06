import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CoffeeContext } from "../../../context/coffeeContext";

import * as S from "./style";
import { formatCoffeePrice } from "../../../utils/formatCofeePrice";
import { BsFillTrash2Fill } from "react-icons/bs";
import { removeCoffeeAction } from "../../../reducers/coffeeReducer/actions";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

export const ModalCoffee: React.FC = () => {
  const { coffeeList, dispatchCoffeeList, setShowItemsModal } =
    useContext(CoffeeContext);

  const removeCoffeeFn = (coffeeName: string) => {
    dispatchCoffeeList(removeCoffeeAction({ name: coffeeName }));
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(pathname);

  const isDisabledButton = () => {
    return coffeeList.length === 0 && pathname === "/";
  };
  return (
    <S.Container>
      <header>
        <h3>Detalhes do pedido</h3>
        <AiOutlineShoppingCart />
      </header>
      <S.List>
        {coffeeList.length === 0 ? (
          <aside>
            <p>Sem cafés na lista :(</p>
          </aside>
        ) : (
          <>
            {coffeeList.map((coffee) => (
              <S.CoffeeItem>
                <img src={coffee.image} alt={`cooffee ${coffee.name}`} />

                <section>
                  <p>{coffee.name}</p>
                  <aside>
                    <span>R$ {formatCoffeePrice(coffee.unity_price)}</span>
                    <span>X{coffee.quantity}</span>
                  </aside>
                </section>

                <S.DeleteCoffee onClick={() => removeCoffeeFn(coffee.name)}>
                  <BsFillTrash2Fill />
                </S.DeleteCoffee>
              </S.CoffeeItem>
            ))}
          </>
        )}
      </S.List>
      <S.LinKButton
        disabled={isDisabledButton()}
        onClick={() => {
          setShowItemsModal(false);
          return navigate(pathname === "/" ? "payment" : "/");
        }}
      >
        {pathname === "/"
          ? "Ir para a sessão de pagamentos"
          : "Voltar a lista de cafés"}
      </S.LinKButton>
    </S.Container>
  );
};
