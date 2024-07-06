import ListOfRecipes from "../components/ListOfRecipes";

export default function Home({ foodData, setFoodId }) {
  return (
    <div className="container">
      <header className="mb-5">
        <div className="mx-auto text-center" style={{ maxWidth: "700px" }}>
          <h1 className="fw-light p-4" style={{ color: "#a77674" }}>
            Recipes
          </h1>
          <p className="fs-6 text-body-secondary">
            Search your favourite recipes: Lasagne, Soup, Cake, Desserts, or
            anything your wish or desire. Vegetarian, non-vegetarian and vegan.
            We&apos;ve got it all!
          </p>
        </div>
      </header>

      {foodData.length === 0 ? (
        <h4 className="p-4 text-center" style={{ color: "#a77674" }}>
          Search not found. Please check your spelling!
        </h4>
      ) : (
        <ListOfRecipes foodData={foodData} setFoodId={setFoodId} />
      )}
    </div>
  );
}
