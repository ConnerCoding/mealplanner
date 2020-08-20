import React, {useState, useEffect} from 'react';
import './App.css';
import Recipes from './Recipes';

require('dotenv').config();

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('mint');

  useEffect(() => {
    getRecipes();
  }, [query]);
  
  const getRecipes = async () => {
    const data = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const recipes = await data.json();
    setRecipes(recipes.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to my Meal Finder!
        </h1>
        <div className='wrapper'>
          <h3>Search for something yummy</h3>
        </div>
        <form onSubmit={getQuery} action="">
          <input onChange={updateSearch} value={search} type="text"/>
          <button type='submit'>Search</button>
        </form>
        <div className='wrapper'>
          {recipes.map((recipe, index) => (
              <Recipes key={index} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} url={recipe.recipe.url} ingredients={recipe.recipe.ingredients} />
          ))}
          </div>
      </header>
    </div>
  );
}

export default App;
