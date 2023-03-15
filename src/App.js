import './App.css';
import { useEffect, useState } from 'react';
import { getAllRecipes, addRecipe, editRecipe, deleteRecipe } from './FetchRecipes';
import MyRecipes from './MyRecipes';
import devider from './devider.png';

function App() {
  const [myRecipe, setMyRecipe] = useState([]);
  const [title, setTitle] = useState("");
  const [lable, setLable] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [text, setText] = useState("");
  const [editing, setEditing] = useState(false);
  const [recipeId, setRecipeId] = useState("");
  
  useEffect(()=> {
    getAllRecipes(setMyRecipe);
  }, []);
  
  const updatingRecipe = (_id, title, lable, ingredients, text) => {
    setEditing(true)
    setTitle(title)
    setLable(lable)
    setIngredients(ingredients)
    setText(text)
    setRecipeId(_id)
  }
  
  return (
    <div className='container-body'>
    <div className="container">
      <div>
        <h1>My favorite recipes</h1>
      </div>
      <div>
        <div className='form'>
          <input className="font" 
          type="text" value={title} 
          name="title" 
          placeholder="Dish name"
          onChange={(event) => setTitle(event.target.value)}/>
        </div>
        <div>
          <select className="font" 
          value={lable} 
          name="lable"
          onChange={(event) => setLable(event.target.value)}>
            <option>Choose category</option>
            <option>BREACKFAST</option>
            <option>APPETIZER</option>
            <option>SALAD</option>
            <option>SOUP</option>
            <option>ENTREE</option>
            <option>DESSERT</option>
          </select>
        </div>
        <div>
          <textarea rows="5" cols="31" 
          className="font" 
          type="text" 
          value={ingredients} 
          name="ingredients" 
          placeholder="List the ingredients"
          onChange={(event) => setIngredients(event.target.value)}>

          </textarea>
        </div>
        <div>
          <textarea rows="5" cols="31" 
          className="font" 
          type="text" 
          value={text} 
          name="text" 
          placeholder="Add instructions"
          onChange={(event) => setText(event.target.value)}>

          </textarea>

        </div>
        <div className="container-btn">
          <button disabled={!title && !lable && !ingredients && !text}
          onClick={editing? ()=>editRecipe(recipeId, title, setTitle, lable, setLable, ingredients, setIngredients, text, setText, setMyRecipe, setEditing) : () => addRecipe (title, setTitle, lable, setLable, ingredients, setIngredients, text, setText, setMyRecipe)}
          className="add-btn">{editing ? "EDIT" : "ADD"}</button>
        </div>
      </div>
      <div>
        <img className='devider' src={devider} alt='Devider'/>
      </div>
      <div>
          <h2>My collection</h2>
      </div>
      {myRecipe.map((recipe) => <MyRecipes title={recipe.title} 
      lable={recipe.lable} 
      ingredients={recipe.ingredients}
      text={recipe.text}
      key={recipe._id}
      updatingRecipe= {()=> updatingRecipe(recipe._id, recipe.title, recipe.lable, recipe.ingredients, recipe.text)}
      deleteRecipe= {() => deleteRecipe(recipe._id, setMyRecipe)}
      />
      )}
    </div>
    </div>
  );
}

export default App;
