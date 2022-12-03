import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  padding:0;
  margin:0;
  box-sizing: border-box;
}

html, body {

  background-color: ${(props) => props.theme.background};

};

h1 {
  color: ${(props) => props.theme["base-title"]};
  //font-family: 'Baloo 2', cursive;
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
  font-size: 1rem;

  :hover {
    filter: brightness(0.95);
  }
}

:is(h1, h2){
  font-family: 'Baloo 2', cursive;
};

:is(p, label, span){
  font-family: 'Roboto', sans-serif;
}
`;
