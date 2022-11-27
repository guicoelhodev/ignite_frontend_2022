import { Header } from "../components/Header";
import { ListProvider } from "../context/ListContext";
import * as S from "./style";

export const App = () => {
  return (
    <S.Container>
      <ListProvider>
        <Header />
      </ListProvider>
    </S.Container>
  );
};
