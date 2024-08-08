import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./recipedetails.module.css";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";
import RecipeServings from "./RecipeServings";
import fallback from "../assets/fallback.jpg";

const RecipeDetails = ({ foodId }) => {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${API_KEY}`;

  const handleImageError = (e) => {
    e.target.src = fallback;
  };

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted

    const fetchFood = async () => {
      setIsLoading(true);
      setIsError(null); // Reset error state before fetching
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        if (isMounted) {
          // Only update state if component is still mounted
          setFood(data);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setIsError(error.message);
          setIsLoading(false);
        }
      }
    };

    fetchFood();

    return () => {
      isMounted = false; // Clean up to prevent state updates if component is unmounted
    };
  }, [foodId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    let errorMessage;

    switch (isError) {
      case "404":
        errorMessage = "404 Not Found. The requested resource does not exist";
        break;
      case "500":
        errorMessage =
          "500 Internal Server Error. A generic error occurred on the server";
        break;
      default:
        errorMessage = `Error: ${isError}`;
    }

    return (
      <h1 className="p-5 text-center" style={{ color: "#a77674" }}>
        {errorMessage}
      </h1>
    );
  }

  return (
    <div className="container">
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <hr style={{ opacity: "30%" }} />
        <RecipeServings food={food} />
        <img
          className={styles.recipeImage}
          src={food.image}
          alt={food.title}
          onError={handleImageError}
        />
        <h2 style={{ color: "#a77674" }} className="fw-semibold">
          Ingredients
        </h2>
        <RecipeIngredients food={food} isLoading={isLoading} />
        <h2 style={{ color: "#a77674" }} className="fw-semibold mb-3">
          Instructions:
        </h2>
        <RecipeInstructions food={food} isLoading={isLoading} />
        <div className={styles.buttonContainer}>
          <button onClick={() => navigate("/")} className={styles.itemButton}>
            Back to food list
          </button>
        </div>
      </div>
    </div>
  );
};
export default RecipeDetails;
