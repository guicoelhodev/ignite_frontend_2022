import expressoTradicional from "../assets/coffeeList/Type=Expresso.png";
import expressoAmericano from "../assets/coffeeList/Type=Americano.png";
import expressoCremoso from "../assets/coffeeList/Type=Expresso Cremoso.png";
import expressoGelado from "../assets/coffeeList/Type=Café Gelado.png";
import expressoCafeLeite from "../assets/coffeeList/Type=Café com Leite.png";
import latte from "../assets/coffeeList/Type=Latte.png";
import cappuccino from "../assets/coffeeList/Type=Capuccino.png";
import macchiato from "../assets/coffeeList/Type=Macchiato.png";
import mochaccino from "../assets/coffeeList/Type=Mochaccino.png";
import chocolateQuente from "../assets/coffeeList/Type=Chocolate Quente.png";
import cubano from "../assets/coffeeList/Type=Cubano.png";
import havaiano from "../assets/coffeeList/Type=Havaiano.png";
import arabe from "../assets/coffeeList/Type=Árabe.png";
import irlandes from "../assets/coffeeList/Type=Irlandês.png";

export const coffeeList = [
  {
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    unity_price: 990,
    image: expressoTradicional,
    status: ["tradicional"],
  },
  {
    title: "Expresso Americano",
    description:
      "Expresso diluído, menos intenso que o tradicionalO tradicional café feito com água quente e grãos moídos",
    unity_price: 990,
    image: expressoAmericano,
    status: ["tradicional"],
  },
  {
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    unity_price: 990,
    image: expressoCremoso,
    status: ["tradicional"],
  },
  {
    title: "Expresso Gelado",
    description:
      "Bebida preparada com café expresso e cubos de geloCafé expresso tradicional com espuma cremosa",
    unity_price: 850,
    image: expressoGelado,
    status: ["tradicional", "gelado"],
  },
  {
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    unity_price: 700,
    image: expressoCafeLeite,
    status: ["tradicional", "com leite"],
  },
  {
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    unity_price: 750,
    image: latte,
    status: ["tradicional", "com leite"],
  },
  {
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    unity_price: 980,
    image: cappuccino,
    status: ["tradicional", "com leite"],
  },
  {
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    unity_price: 700,
    image: macchiato,
    status: ["tradicional", "com leite"],
  },
  {
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    unity_price: 1050,
    image: mochaccino,
    status: ["tradicional", "com leite"],
  },
  {
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    unity_price: 1000,
    image: chocolateQuente,
    status: ["especial", "com leite"],
  },
  {
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    unity_price: 800,
    image: cubano,
    status: ["especial", "alcoólico", "gealado"],
  },
  {
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    unity_price: 900,
    image: havaiano,
    status: ["especial"],
  },
  {
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    unity_price: 800,
    image: arabe,
    status: ["especial"],
  },
  {
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    unity_price: 1050,
    image: irlandes,
    status: ["especial", "alcoólico"],
  },
];
