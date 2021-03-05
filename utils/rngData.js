import "react-native-get-random-values";
var faker = require('faker');
const { v4: uuidv4 } = require("uuid");

export function rng() {
  const recipe = {
    id: uuidv4(),
    userName: faker.name.findName(),
    dishName: faker.commerce.productName(),
    cuisine: faker.lorem.word(),
    prepTime: Math.floor(Math.random() * 10) + 1,
    cookTime: Math.floor(Math.random() * 60) + 1,
    directions: "Stir and bake for 10 min",
  };
  
return recipe;
}

export default function rngData() {
  const data = [];
  for (let i = 0; i < 10; i++) {
    const recipe = {
      id: uuidv4(),
      userName: "danny",
      dishName: "kanban",
      cuisine: "sushi",
      prepTime: Math.floor(Math.random() * 10) + 1,
      cookTime: Math.floor(Math.random() * 10) + 1,
      forks: Math.floor(Math.random() * 10) + 1,
      stars: Math.floor(Math.random() * 10) + 1,
      ingredientList: [
        "rice",
        "tofu",
        "soy sauce",
        "salt",
        "pepper",
        "milk",
        "cheese",
      ],
      instructions: "Stir and bake for 10 min",
    };
    data.push(recipe);
  }
  return data;
}

