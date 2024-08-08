const DemoPage = () => {
  return (
    <header>
      <div className="mx-auto text-center pb-5" style={{ maxWidth: "700px" }}>
        <h1 className="fw-light p-4" style={{ color: "#a77674" }}>
          Hi user,
        </h1>
        <p className="fs-6 text-body-secondary">
          The Login & Register Account features here are just a Frontend demo
          prototype with no Backend connection. However, the search recipe is
          fully functional with an API connection established to spoonacular.com
          so you can search recipes.
        </p>
      </div>
    </header>
  );
};
export default DemoPage;
