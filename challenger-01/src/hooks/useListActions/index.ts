import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { IContextProps, ITask, ListContext } from "../../context/ListContext";

export const useListActions = () => {
  const { search, setSearch, taskList, setTaskList } = useContext(
    ListContext
  ) as IContextProps;

  const addNewTask = () => {
    let newTask = {
      id: uuid(),
      description: search,
      completed: false,
    };

    if (search.length === 0) {
      return alert("É necessário escrever algo para criar uma tarefa");
    } else if (taskList.length === 0) {
      setTaskList([newTask]);
    } else {
      setTaskList((prev) => [...prev, newTask]);
    }

    setSearch("");
  };

  const removeTask = (item: ITask) => {
    let tmpList = taskList.filter((task) => task.id !== item.id);

    setTaskList(tmpList);
  };

  const changeTaskStatus = (item: ITask) => {
    let tmpList = taskList.map((task) => {
      if (task.id === item.id) {
        return { ...task, completed: !item.completed };
      } else return task;
    });

    setTaskList(tmpList);
  };

  return { addNewTask, removeTask, changeTaskStatus };
};
