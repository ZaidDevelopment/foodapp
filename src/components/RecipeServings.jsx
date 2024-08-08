import React from "react";

const RecipeServings = ({ food }) => {
  return (
    <div className="row" style={{ opacity: "70%" }}>
      <p className="col-6 mb-0 pe-0">
        <strong>Time: </strong>
        {food.readyInMinutes ? `${food.readyInMinutes} min` : "N/A"}
      </p>
      <p className="col-6 mb-0 pe-0">
        <strong>Diet: </strong>
        {food.vegetarian ? "Vegetarian" : "Non-vegetarian"}
      </p>
      <p className="col-6 pe-0">
        <strong>Serves: </strong>
        {food.servings ? food.servings : "N/A"}
      </p>
      <p className="col-6 pe-0">
        <strong>Price: </strong>
        {food.pricePerServing
          ? `$${(food.pricePerServing / 100).toFixed(2)} / serving`
          : "N/A"}
      </p>
    </div>
  );
};
export default RecipeServings;
