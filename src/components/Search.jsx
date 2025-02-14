import { useEffect, useState } from "react"

import styles from './search.module.css';

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "f46876a5262a431cb50108b760a14d8c";

function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState("Pizza");

    // Syntax of the useEffect hook
    useEffect(()=>{
     async function fetchFood(){
      const res =  await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results)
      setFoodData(data.results)
     }
     fetchFood()
    },[query])
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input} value={query} onChange={(e) => setQuery(e.target.value)} type="text" />
    </div>
  )
}

export default Search
