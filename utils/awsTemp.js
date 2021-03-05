// import { API, graphqlOperation } from 'aws-amplify';
// import { createRecipe } from './../src/graphql/mutations';
// import { listRecipes } from './../src/graphql/queries';

// const initialState = { userName: '', dishName: '' };

// const [formState, setFormState] = useState(initialState);
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     fetchRecipes()
//   }, [])

//   function setInput(key, value) {
//     setFormState({ ...formState, [key]: value })
//   }

// async function fetchRecipes() {
//     try {
//       const recipeData = await API.graphql(graphqlOperation(listRecipes))
//       const recipes = recipeData.data.listRecipes.items
//       setRecipes(recipes)
//     } catch (err) { console.log('error fetching recipes') }
//   }

//  async function addRecipe() {
//     try {
//       const recipe = { ...formState }
//       setRecipes([...recipes, recipe])
//       setFormState(initialState)
//       await API.graphql(graphqlOperation(createRecipe, {input: recipe}))
//     } catch (err) {
//       console.log('error creating recipe:', err)
//     }
//   }


// import { onCreaterecipe } from './graphql/subscriptions';
// import { createRecipe, updateRecipe, deleteRecipe } from './graphql/mutations';
// import { listRecipes } from './graphql/queries';


// const recipes = await API.graphql(graphqlOperation(listRecipes));
// console.log('awsTemp.js -- recipes:', recipes);
/* create a recipe */
// await API.graphql(graphqlOperation(createRecipe, {input: recipe}));
/* update a recipe */
// await API.graphql(graphqlOperation(updateRecipe, { input: { id: recipeId, name: "Updated recipe info" }}));

/* delete a recipe */
// await API.graphql(graphqlOperation(deleteRecipe, { input: { id: recipeId }}));



// // Subscribe to creation of recipe
// const subscription = API.graphql(
//     graphqlOperation(onCreaterecipe)
// ).subscribe({
//     next: (recipeData) => {
//       console.log(recipeData);
//       // Do something with the data
//     }
// });

// // Stop receiving data updates from the subscription
// subscription.unsubscribe();