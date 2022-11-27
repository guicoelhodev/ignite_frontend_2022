import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { ListProvider } from "../context/ListContext";
import { AiFillGithub } from "react-icons/ai";
import * as S from "./style";

export const App = () => {
  return (
    <S.Container>
      <ListProvider>
        <Header />
        <Main />
        <S.Github
          href="https://github.com/guicoelhodev/ignite_frontend_2022"
          target="_blank"
        >
          <p>guicoelhodev</p>
          <AiFillGithub />
        </S.Github>
      </ListProvider>
    </S.Container>
  );
};
