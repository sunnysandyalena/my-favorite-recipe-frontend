import edit from './edit.png';
import remove from './remove.png';
import devider from './devider.png'

const MyRecipes = ({title, lable, ingredients, text, updatingRecipe, deleteRecipe}) => {
    return (
        <div className="container-recipe">
            <div>
                <h3>{title}</h3>
            </div>
            <div className='category'>
                <p>CATEGORY: {lable}</p>
            </div>
            <div className="ingredients-list">
                <p>{ingredients}</p>
            </div>
            <div className="recipe">
                <p>{text}</p>
            </div>
            <div>
                <button className='control-btn' onClick={updatingRecipe}><img src={edit} width="30px" alt="Edit"/></button>
                <button className='control-btn' onClick={deleteRecipe}><img src={remove} width="30px" alt="Remove"/></button>
            </div>
            <div>
                <img className='devider' src={devider} alt='Devider' width='300px'/>
             </div>
        </div>
    )
}

export default MyRecipes;