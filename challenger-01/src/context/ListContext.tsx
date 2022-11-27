import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export const ListContext = createContext<{} | IContextProps>({});

type ITask = {
  id: string;
  description: string;
  status: "done" | "in progress";
};

interface IProvider {
  children: ReactNode;
}

export interface IContextProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;

  taskList: [] | ITask[];
  setTaskList: Dispatch<SetStateAction<[] | ITask[]>>;
}

export const ListProvider: FC<IProvider> = ({ children }) => {
  const [search, setSearch] = useState("");
  const [taskList, setTaskList] = useState<[] | ITask[]>([]);

  return (
    <ListContext.Provider
      value={{
        search,
        setSearch,
        taskList,
        setTaskList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
