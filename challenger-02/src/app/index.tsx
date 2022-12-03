import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "../components/UI/Layout";
import { Routes } from "../routes";
import { defaultStyleTheme } from "../styles/default";
import { GlobalStyle } from "../styles/global";

export const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultStyleTheme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  );
};
