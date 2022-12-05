import { createContext, FC, ReactNode, useReducer } from "react";
import { coffeeReducer } from "../../reducers/coffeeReducer/reducer";

export interface ICoffeeObject {
  name: string;
  unity_price: number;
  quantity: number;
}

export type ICoffeeContext = {
  coffeeList: ICoffeeObject[] | [];
  dispatchCoffeeList: any;
};

export const CoffeeContext = createContext<ICoffeeContext | {}>({});

export const CoffeeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [coffeeList, dispatchCoffeeList] = useReducer(coffeeReducer, []);

  console.log("coffeeList", coffeeList);

  return (
    <CoffeeContext.Provider value={{ coffeeList, dispatchCoffeeList }}>
      {children}
    </CoffeeContext.Provider>
  );
};
