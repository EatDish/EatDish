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