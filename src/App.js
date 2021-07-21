import React,{useState} from 'react'
import "./App.css";
import RecipeTile from "./RecipeTile";

const App = () => {
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("Vegan");


  const YOUR_APP_KEY = "7609c03aefb57dacd349fe7b5e84d9ef";
  const YOUR_APP_ID = "0b52f8cd";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

    const getRecipeInfo = () => {
      fetch(url)
      .then(response => response.json())
      .then((data) => setRecipes(data.hits))
    }

    const onSubmit = (e) => {
      e.preventDefault();
      getRecipeInfo();
    };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>Food Recipe App</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__inputValue"
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app__button" type="submit" value="Search" />

        {/* Dropdown */}

        <select className="app__dropdown">
        <option onClick={() => setHealthLabel("Vegan")}>Vegan</option>
          <option onClick={() => setHealthLabel("dairy-Free")}>dairy-Free</option>
          <option onClick={() => setHealthLabel("Glutten-Free")}>Glutten-Nut-Free</option>
          <option onClick={() => setHealthLabel("Soy-Free")}>Soy-Free</option>
          <option onClick={() => setHealthLabel("Paleo")}>Paleo</option>
          <option onClick={() => setHealthLabel("Egg-Free")}>Egg-Free</option>
          <option onClick={() => setHealthLabel("Peanut-Free")}>Peanut-Free</option>
          <option onClick={() => setHealthLabel("Tree-Nut-Free")}>Tree-Nut-Free</option>
          <option onClick={() => setHealthLabel("Soy-Free")}>Soy-Free</option>
          <option onClick={() => setHealthLabel("Fish-Free")}>Fish-Free</option>
          <option onClick={() => setHealthLabel("Shellfish-Free")}>Shellfish-Free</option>
          <option onClick={() => setHealthLabel("Pork-Free")}>Pork-Free</option>
          <option onClick={() => setHealthLabel("Red-Meat-Free")}>Red-Meat-Free</option>
        </select>
      </form>

      <div className="app__recipes">
        {recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}
      </div>
    </div>
  )
}

export default App;
