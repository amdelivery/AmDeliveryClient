import { v4 as uuidv4 } from 'uuid';


const data = [
    {
      id: uuidv4(),  
      name: "бургер1",
      category: {name: "Бургеры", weight: 2},
      ingredients: "Булочка, Мясо, Салат, Соус",
      weight: "200гр.",
      imgUrl: "https://i.ibb.co/xh6hgPc/burger1.jpg",
      price: "100"
    },
    {
        id: uuidv4(),  
        name: "бургер2",
        category:  {name: "Бургеры", weight: 2},
        ingredients: "Булочка, Мясо, Салат, Соус",
        weight: "200гр.",
        imgUrl: "https://i.ibb.co/VqvzzJ3/burger2.jpg",
        price: "100"
    },
    {
        id: uuidv4(),  
        name: "бургер3",
        category:  {name: "Бургеры", weight: 2},
        ingredients: "Булочка, Мясо, Салат, Соус",
        weight: "200гр.",
        imgUrl: "https://i.ibb.co/yk6Vs8g/burger3.jpg",
        price: "100"
    },
    {
        id: uuidv4(),  
        name: "бургер4",
        category:  {name: "Бургеры", weight: 2},
        ingredients: "Булочка, Мясо, Салат, Соус",
        weight: "200гр.",
        imgUrl: "https://i.ibb.co/T0sVvyq/burger4.jpg",
        price: "100"
    },
    {
        id: uuidv4(),  
        name: "бургер5",
        category:  {name: "Бургеры", weight: 2},
        ingredients: "Булочка, Мясо, Салат, Соус",
        weight: "200гр.",
        imgUrl: "https://i.ibb.co/vQ5jy3m/burger5.jpg",
        price: "100"
    },
    {
        id: uuidv4(),  
        name: "cалат1",
        category:  {name: "Салаты", weight: 1},
        ingredients: "Курица, Соус, Овощи, Сыр",
        weight: "200гр.",
        imgUrl: "https://i.ibb.co/jLLmwBG/salad1.jpg",
        price: "100" 
    },
    {
        id: uuidv4(),  
        name: "cалат2",
        category: {name: "Салаты", weight: 1},
        ingredients: "Курица, Соус, Овощи, Сыр",
        weight: "200гр.",
        imgUrl: "https://i.ibb.co/YN74fMt/salad2.jpg",
        price: "100"
    },
    {
        id: uuidv4(),  
        name: "cалат3",
        category: {name: "Салаты", weight: 1},
        ingredients: "Курица, Соус, Овощи, Сыр",
        weight: "200гр.",
        imgUrl: "https://i.ibb.co/KsyLYv2/salad3.jpg",
        price: "100"
    },
    {
        id: uuidv4(),  
        name: "cалат4",
        category: {name: "Салаты", weight: 1},
        ingredients: "Курица, Соус, Овощи, Сыр",
        weight: "200гр.",
        imgUrl: "https://i.ibb.co/VDpgYb5/salad4.jpg",
        price: "100" 
    },
    {
        id: uuidv4(),  
        name: "cалат5",
        category: {name: "Салаты", weight: 1},
        ingredients: "Курица, Соус, Овощи, Сыр",
        weight: "200гр.",
        imgUrl: "https://i.ibb.co/9vK2Z5y/salad5.jpg",
        price: "100"
    },
    {
        id: uuidv4(),  
        name: "Напитки",
        category: {name: "Напитки", weight: 3},
        ingredients: "Напитки в ассортименте",
        weight: "0.5л.",
        imgUrl: "https://i.ibb.co/cYRz6Br/cola.jpg",
        price: "100" 
    },
    {
        id: uuidv4(),  
        name: "Милкшейк",
        category: {name: "Напитки", weight: 3},
        ingredients: "Милкшейки в ассортименте",
        weight: "0.5л.",
        imgUrl: "https://i.ibb.co/1989ZrS/milkshake.jpg",
        price: "100" 
    },
    {
        id: uuidv4(),  
        name: "Соус сальса",
        category: {name: "Соусы", weight: 4},
        ingredients: "Соус сальса",
        weight: "20гр.",
        imgUrl: "https://i.ibb.co/vPVvFPv/sause1.png",
        price: "100" 
    },
    {
        id: uuidv4(),  
        name: "Соус сырный",
        category: {name: "Соусы", weight: 4},
        ingredients: "Соус сырный",
        weight: "20гр.",
        imgUrl: "https://i.ibb.co/tw6yhbc/sause2.jpg",
        price: "100" 
    },
    {
        id: uuidv4(),  
        name: "Соус карри",
        category: {name: "Соусы", weight: 4},
        ingredients: "Соус карри",
        weight: "20гр.",
        imgUrl: "https://i.ibb.co/51hCnSN/sause3.jpg",
        price: "100" 
    },
    {
        id: uuidv4(),  
        name: "Томатный кетчуп",
        category: {name: "Соусы", weight: 4},
        ingredients: "Томатный кетчуп",
        weight: "20гр.",
        imgUrl: "https://i.ibb.co/0n1Dq29/sause4.png",
        price: "100" 
    },
    
]

export default data;