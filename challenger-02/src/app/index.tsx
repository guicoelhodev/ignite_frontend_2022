import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "../components/UI/Layout";
import { CoffeeProvider } from "../context/coffeeContext";
import { Routes } from "../routes";
import { defaultStyleTheme } from "../styles/default";
import { GlobalStyle } from "../styles/global";

export const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultStyleTheme}>
        <GlobalStyle />
        <CoffeeProvider>
          <Routes />
        </CoffeeProvider>
      </ThemeProvider>
    </>
  );
};

// import expressoTradicional from "../assets/coffeeList/Type=Expresso.png";
// import expressoAmericano from "../assets/coffeeList/Type=Americano.png";
// import expressoCremoso from "../assets/coffeeList/Type=Expresso Cremoso.png";
// import expressoGelado from "../assets/coffeeList/Type=Café Gelado.png";
// import expressoCafeLeite from "../assets/coffeeList/Type=Café com Leite.png";
// import latte from "../assets/coffeeList/Type=Latte.png";
// import cappuccino from "../assets/coffeeList/Type=Capuccino.png";
// import macchiato from "../assets/coffeeList/Type=Macchiato.png";
// import mochaccino from "../assets/coffeeList/Type=Mochaccino.png";
// import chocolateQuente from "../assets/coffeeList/Type=Chocolate Quente.png";
// import cubano from "../assets/coffeeList/Type=Cubano.png";
// import havaiano from "../assets/coffeeList/Type=Havaiano.png";
// import arabe from "../assets/coffeeList/Type=Árabe.png";
// import irlandes from "../assets/coffeeList/Type=Irlandês.png";
