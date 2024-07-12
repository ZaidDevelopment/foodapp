export default function RecipeServings({ food }) {
  return (
    <div className="row" style={{ opacity: "70%" }}>
      <p className="col-6 mb-0 pe-0">
        <strong>Time: </strong>
        {food.readyInMinutes} Minutes
      </p>
      <p className="col-6 mb-0 pe-0">
        <strong>Serves: </strong>
        {food.servings}
      </p>
      <p className="col-6 pe-0">
        <strong>Diet: </strong>
        {food.vegeterian ? "Vegetarian" : "Non-Vegeterian"}
      </p>
      <p className="col-6 pe-0">
        <strong>$: </strong>
        {(food.pricePerServing / 100).toFixed(2)} Per serving
      </p>
    </div>
  );
}
