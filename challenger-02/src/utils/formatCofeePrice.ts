export const formatCoffeePrice = (price: number) => {
  let [integer, cents] = [Math.trunc(price / 100), price % 100];

  return `${integer},${cents === 0 ? "00" : cents}`;
};
