import React, { useContext } from "react";
import * as S from "./style";

import HomeImage from "../../assets/img/home.png";
import { Layout } from "../../components/UI/Layout";
import { coffeeList as coffeeListData } from "../../data/coffeeList";
import { CoffeeCard } from "../../components/FC/CoffeeCard";

import { AiOutlineInbox, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillStopwatchFill } from "react-icons/bs";
import { RiCupLine } from "react-icons/ri";
import { defaultStyleTheme } from "../../styles/default";

const listIcons = [
  {
    text: "Compra simples e segura",
    icon: <AiOutlineShoppingCart />,
    bgColor: defaultStyleTheme["yellow-dark"],
  },
  {
    text: "Embalagem mantém o café intacto ",
    icon: <AiOutlineInbox />,
    bgColor: defaultStyleTheme["base-text"],
  },
  {
    text: "Entrega rápida e rastreada",
    icon: <BsFillStopwatchFill />,
    bgColor: defaultStyleTheme.yellow,
  },
  {
    text: "O café chega fresquinho até você",
    icon: <RiCupLine />,
    bgColor: defaultStyleTheme.purple,
  },
];

export const Home: React.FC = () => {
  return (
    <Layout>
      <S.Container>
        <S.HomeAppresentation>
          <article>
            <h1>
              Encontre o café perfeito <br />
              para qualquer hora do dia
            </h1>

            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <S.IconList>
              {listIcons.map((item) => (
                <S.IconItem bgColor={item.bgColor}>
                  <span>{item.icon}</span>
                  <p>{item.text}</p>
                </S.IconItem>
              ))}
            </S.IconList>
          </article>
          <img
            src={HomeImage}
            alt="imagem que representa um café da Coffee Delivery"
          />
        </S.HomeAppresentation>
        <S.CoffeeList>
          <h2>Nossos cafés</h2>
          <ul>
            {coffeeListData.map((coofeeItem, index) => (
              <CoffeeCard key={coofeeItem.title + index} {...coofeeItem} />
            ))}
          </ul>
        </S.CoffeeList>
      </S.Container>
    </Layout>
  );
};
