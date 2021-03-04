const { uuid } = require('uuidv4');

export default function rngData () {
  const data = [];
  for(let i = 0; i < 10; i++) {
    const recipe = {
      id: uuid(),
      userName: 'danny',
      dishName: 'kanban',
      cuisine: 'sushi',
      prepTime: Math.floor(Math.random()*10) + 1,
      cookTime: Math.floor(Math.random()*10) + 1,
      forks: Math.floor(Math.random()*10) + 1,
      stars: Math.floor(Math.random()*10) + 1,
      ingredientList: [],
    }
    data.push(recipe)
  }
  return data;
};
