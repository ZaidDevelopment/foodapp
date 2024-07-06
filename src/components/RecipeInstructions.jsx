export default function RecipeInstructions({ food, isLoading }) {
  return (
    <div>
      <h2 style={{ color: "#a77674" }} className="fw-semibold mb-3">
        Instructions:
      </h2>
      <div className="fw-lighter text-black-50">
        {/* only load instruction when data is ready */}
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number} className="mb-1">
                {step.step}
              </li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
