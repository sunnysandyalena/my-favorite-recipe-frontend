import axios from 'axios';
const getAllRecipes = (setMyRecipe) => {
    axios.get('https://my-favorite-recipe.onrender.com')
    .then(({data}) => {console.log(data)
    setMyRecipe(data)
})
}
const addRecipe = (title, setTitle, lable, setLable, ingredients, setIngredients, text, setText, setMyRecipe) => {
    axios.post('https://my-favorite-recipe.onrender.com/saveRecipe', {title, lable, ingredients, text})
    .then((data) => {
        console.log(data)
        setTitle("")
        setLable("")
        setIngredients("")
        setText("")
        getAllRecipes(setMyRecipe)
    })
}
const editRecipe = (recipeId, title, setTitle, lable, setLable, ingredients, setIngredients, text, setText, setMyRecipe, setEditing) => {
    axios.post ('https://my-favorite-recipe.onrender.com/editRecipe', {_id: recipeId, title, lable, ingredients, text})
    .then((data) => {
        console.log(data)
        setTitle("")
        setLable("")
        setIngredients("")
        setText("")
        setEditing(false)
        getAllRecipes(setMyRecipe)
    })
}
const deleteRecipe = (_id, setMyRecipe) => {
    axios.post('https://my-favorite-recipe.onrender.com/deleteRecipe', {_id})
    .then((data) => {
        console.log(data)
        getAllRecipes(setMyRecipe)
    })
}

export {getAllRecipes, addRecipe, editRecipe, deleteRecipe};