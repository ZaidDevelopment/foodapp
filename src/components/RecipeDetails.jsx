import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./recipedetails.module.css";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";
import RecipeServings from "./RecipeServings";

export default function RecipeDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
      console.log("Food recipe:");
      console.log(data);
    }
    fetchFood();
  }, [foodId]); //when this value changes it will rerender the component
  return (
    <div className="container">
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <hr style={{ opacity: "30%" }} />
        {/* Recipe Servings */}
        <RecipeServings food={food} />
        <img className={styles.recipeImage} src={food.image} alt="" />
        {/* Recipe Ingredients */}
        <RecipeIngredients food={food} isLoading={isLoading} />
        {/* Recipe Instructions */}
        <RecipeInstructions food={food} isLoading={isLoading} />
        <div className={styles.buttonContainer}>
          <button
            onClick={() => {
              navigate("/");
            }}
            className={styles.itemButton}
          >
            Back to food list
          </button>
        </div>
      </div>
    </div>
  );
}
