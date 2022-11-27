import React, { useContext } from "react";
import { ListContext, IContextProps } from "../../context/ListContext";
import clipboard from "../../assets/clipboard.png";

import * as S from "./style";
import { Task } from "../Task";

export const Main: React.FC = () => {
  const { taskList } = useContext(ListContext) as IContextProps;

  const getCompletedTasks = () => {
    let completed = taskList.filter((task) => task.completed);

    return `${completed.length} de ${taskList.length}`;
  };
  return (
    <S.Container>
      <main>
        <S.ListCountInfo>
          <article>
            <p>Tarefas criadas</p>
            <span>{taskList.length}</span>
          </article>

          <article>
            <p>Concluídas</p>
            <span>{getCompletedTasks()}</span>
          </article>
        </S.ListCountInfo>

        {taskList.length === 0 ? (
          <S.EmptyTask>
            <img src={clipboard} alt="clipboard icon" />

            <aside>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </aside>
          </S.EmptyTask>
        ) : (
          <ul>
            {taskList.map((task) => (
              <Task key={task.id} {...task} />
            ))}
          </ul>
        )}
      </main>
    </S.Container>
  );
};
