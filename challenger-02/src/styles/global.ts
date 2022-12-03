import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  padding:0;
  margin:0;
  box-sizing: border-box;
}

html, body {

  background-color: ${(props) => props.theme.background};
  width:100%;
  min-height: 100vh;
  height:100%;
};

h1 {
  color: ${(props) => props.theme["base-title"]};
}

h2 {
  color: ${(props) => props.theme["base-subtitle"]};
}

p {
  color: ${(props) => props.theme["base-text"]};
}

label, span {
  color: ${(props) => props.theme["base-label"]};
}

li {
  list-style: none;
}

button {
  cursor: pointer;
}
`;
