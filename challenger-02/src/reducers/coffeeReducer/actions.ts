import { ICoffeeObject } from "../../context/coffeeContext";

export enum ActionCoffee {
  ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
}

export const addNewCoffeAction = (params: ICoffeeObject) => {
  return {
    type: ActionCoffee.ADD_NEW_COFFEE,
    payload: params,
  };
};
