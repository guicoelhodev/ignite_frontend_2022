import React, { ChangeEvent, useContext } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IContextProps, ListContext } from "../../context/ListContext";
import { DebounceInput } from "react-debounce-input";
import * as S from "./style";
import { useListActions } from "../../hooks/useListActions";

export const AddTask: React.FC = () => {
  const { search, setSearch } = useContext(ListContext) as IContextProps;
  const { addNewTask } = useListActions();

  return (
    <S.Container>
      <DebounceInput
        type="text"
        value={search}
        placeholder={"Adicione uma tarefa"}
        onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
          setSearch(target.value);
        }}
        debounceTimeout={500}
      />
      <button onClick={addNewTask}>
        <p>Criar</p>
        <IoMdAddCircleOutline />
      </button>
    </S.Container>
  );
};
