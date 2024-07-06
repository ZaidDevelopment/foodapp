import styles from "./recipedetails.module.css";

export default function RecipeServings({ food }) {
  return (
    <div className={styles.servingsDetails}>
      <p>
        <strong>Time: </strong>
        {food.readyInMinutes} Minutes
      </p>
      <p>
        <strong>Serves: </strong>
        {food.servings}
      </p>
      <p>
        <strong>Diet: </strong>
        {food.vegeterian ? "Vegetarian" : "Non-Vegeterian"}
      </p>
      <p>
        <strong>$: </strong>
        {(food.pricePerServing / 100).toFixed(2)} Per serving
      </p>
    </div>
  );
}
