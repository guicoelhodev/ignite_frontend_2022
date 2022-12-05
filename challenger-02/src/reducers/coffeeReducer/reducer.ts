import { ICoffeeObject } from "../../context/coffeeContext";
import { ActionCoffee } from "./actions";

interface IAction {
  type: string;
  payload: any;
}
export const coffeeReducer = (state: ICoffeeObject[] | [], action: IAction) => {
  switch (action.type) {
    case ActionCoffee.ADD_NEW_COFFEE: {
      if (state.length === 0) return (state = [...state, action.payload]);

      let currentCoffeeItem = action.payload;

      let existItem = state.some(
        (item) => item.name === currentCoffeeItem.name
      );

      if (!existItem) {
        return [...state, currentCoffeeItem];
      } else {
        return handleQuantityCoffee(state, currentCoffeeItem);
      }
    }

    default:
      return state;
  }
};

const handleQuantityCoffee = (
  coffeeList: ICoffeeObject[],
  currentCoffee: ICoffeeObject
) => {
  let tmpCoffeeList = coffeeList.map((item) => {
    if (item.name === currentCoffee.name) {
      return { ...item, quantity: currentCoffee.quantity };
    } else return item;
  });

  return tmpCoffeeList;
};
