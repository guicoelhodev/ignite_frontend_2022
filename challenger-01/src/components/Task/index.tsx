import React from "react";
import { BsCheckLg, BsFillTrash2Fill } from "react-icons/bs";
import { ITask } from "../../context/ListContext";
import { useListActions } from "../../hooks/useListActions";
import * as S from "./style";

export const Task: React.FC<ITask> = (props) => {
  const { changeTaskStatus, removeTask } = useListActions();
  return (
    <S.Container completed={props.completed}>
      <S.Checkbox
        completed={props.completed}
        onClick={() => changeTaskStatus(props)}
      >
        {props.completed && <BsCheckLg />}
      </S.Checkbox>
      <p>{props.description}</p>

      <S.ExcludeButton onClick={() => removeTask(props)}>
        <BsFillTrash2Fill />
      </S.ExcludeButton>
    </S.Container>
  );
};
