export default function RecipeIngredients({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 style={{ color: "#a77674" }} className="fw-semibold">
            Ingredients
          </h2>
          <div className="fw-lighter text-black-50 lh-lg">
            <ul>
              {food.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>
                  {ingredient.amount % 1 == 0
                    ? ingredient.amount
                    : ingredient.amount.toFixed(2)}
                  {ingredient.unit.substring(0, 1) == "g"
                    ? ` ${ingredient.unit} `
                    : ` ${ingredient.unit.toLowerCase()} `}
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
