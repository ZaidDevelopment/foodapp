import React from "react";

const RecipeIngredients = ({ food, isLoading }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!food.extendedIngredients || food.extendedIngredients.length === 0) {
    return <p>No ingredients available for this recipe.</p>;
  }

  return (
    <div>
      <div className="fw-lighter text-black-50 lh-lg">
        <ul>
          {food.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.amount % 1 === 0
                ? ingredient.amount
                : ingredient.amount.toFixed(2)}
              {ingredient.unit.substring(0, 1).toLowerCase() === "g"
                ? ` ${ingredient.unit} `
                : ` ${ingredient.unit.toLowerCase()} `}
              {ingredient.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RecipeIngredients;
