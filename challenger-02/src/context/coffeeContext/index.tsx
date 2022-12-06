import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useReducer,
  useState,
} from "react";
import { coffeeReducer } from "../../reducers/coffeeReducer/reducer";

export interface ICoffeeObject {
  name: string;
  unity_price: number;
  quantity: number;
  image: any;
}

export type ICoffeeContext = {
  coffeeList: ICoffeeObject[] | [];
  dispatchCoffeeList: any;

  showItemsModal: boolean;
  setShowItemsModal: Dispatch<SetStateAction<boolean>>;
};

export const CoffeeContext = createContext<ICoffeeContext>(null!);

export const CoffeeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [coffeeList, dispatchCoffeeList] = useReducer(coffeeReducer, []);

  const [showItemsModal, setShowItemsModal] = useState(false);
  console.log("coffeeList", coffeeList);

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        dispatchCoffeeList,
        showItemsModal,
        setShowItemsModal,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
