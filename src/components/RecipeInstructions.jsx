import React from "react";

const RecipeInstructions = ({ food, isLoading }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!food.analyzedInstructions || food.analyzedInstructions.length === 0) {
    return <p>No instructions available for this recipe.</p>;
  }

  return (
    <div>
      <div className="fw-lighter text-black-50">
        <ol>
          {food.analyzedInstructions[0].steps.map((step) => (
            <li key={step.number} className="mb-1">
              {step.step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default RecipeInstructions;
