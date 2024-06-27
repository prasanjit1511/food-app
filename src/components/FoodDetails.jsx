import { useEffect, useState } from "react";
import styles from './fooddetails.module.css';
import ItemList from "./ItemList";

function FoodDetails({foodId}) {
    const [food , setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "f46876a5262a431cb50108b760a14d8c";

    useEffect(()=>{
        async function fetchFood(){
            const res =  await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data)
            setFood(data)
            setIsLoading(false)
           }
           fetchFood()
    },[foodId])
  return (
    <div>
       {/* FoodDetails : {foodId} */}
       <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />

      <div className={styles.recipeDetails}>
       <span>
        <strong>⏲️ {food.readyInMinutes} Minutes</strong>
       </span>
       <span>
         👪<strong>Serves :{food.servings}</strong>
       </span>
       <span>
       <strong>{food.vegetarian ? " 🥕Vegetarian" : " 🍖Non-vegetarian"} </strong>
       </span>
       <span>
       <strong>{food.vegan ? "🐐Vegan" : ""}</strong>
       </span>
       </div>

       <div>
       <strong> <span><b>$</b>{food.pricePerServing / 100} Per Serving </span>  </strong>
       </div>
       
       <h2>Ingredients</h2>
        <ItemList isLoading={isLoading} food={food}/>

       <h2>Instructions</h2>
       <div className={styles.recipeInstructions}>
        <ol>
        {isLoading ? <p>Loading...</p> : food.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li>))}
        </ol>
       </div>

       </div>

    </div>
  )
}

export default FoodDetails
