import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const URL = "https://api.spoonacular.com/recipes/complexSearch"; //endpoint
const API_KEY = import.meta.env.VITE_API_KEY;

export default function SearchRecipes({ setFoodData }) {
  let todaysRecipe = "cake"; //today's recommended recipe
  const [userInput, setUserInput] = useState("");
  const [query, setQuery] = useState(todaysRecipe);
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate("/");
    setQuery(userInput);
  }

  useEffect(() => {
    // async await is a way to confirm that don't execute res.json until res is fetched and ready
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
      console.log("Data from API: ");
      console.log(data.results);
    }
    fetchFood();
  }, [query]); //when the value of query changes, it will trigger a call to fetchFood()
  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button className="me-2" onClick={handleSearch} variant="outline-success">
        <i className="fa-solid fa-magnifying-glass"></i>
      </Button>
    </Form>
  );
}
