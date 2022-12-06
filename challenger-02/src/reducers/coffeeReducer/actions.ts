import { ICoffeeObject } from "../../context/coffeeContext";

export enum ActionCoffee {
  ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
}

export const addNewCoffeAction = (params: ICoffeeObject) => {
  return {
    type: ActionCoffee.ADD_NEW_COFFEE,
    payload: params,
  };
};

export const removeCoffeeAction = (params: { name: string }) => {
  return {
    type: ActionCoffee.REMOVE_COFFEE,
    payload: params.name,
  };
};
