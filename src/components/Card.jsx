import styles from "./card.module.css";
import { useNavigate } from "react-router-dom";

export default function Card({ food, setFoodId }) {
  const navigate = useNavigate();
  const handleImageError = (e) => {
    e.target.src = "./src/assets/fallback.jpg";
  };

  return (
    <div className={styles.itemContainer}>
      <img
        className={styles.itemImage}
        src={food.image}
        alt={food.title || "fallback image"}
        onError={handleImageError}
      />
      <p className={styles.itemName}>
        {food.title.length > 20
          ? `${food.title.substring(0, 20)}...`
          : food.title}
      </p>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setFoodId(food.id);
            console.log(food.id);
            navigate("/RecipeDetails");
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
