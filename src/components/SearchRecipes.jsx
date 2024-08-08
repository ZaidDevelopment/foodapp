import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const SearchRecipes = ({ setFoodData }) => {
  const [userInput, setUserInput] = useState("");
  const [query, setQuery] = useState("cake");
  const navigate = useNavigate();
  const ENDPOINT = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `${ENDPOINT}?query=${query}&apiKey=${API_KEY}`;

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/");
    setQuery(userInput);
  };

  useEffect(() => {
    // async await is a way to confirm that don't execute response.json until response is fetched and ready
    const fetchFood = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        setFoodData(data.results);
        console.log("Data from API:", data.results);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchFood();
  }, [query, setFoodData]);
  // when the value of query changes, it will trigger a call to fetchFood()
  // added setFoodData to the dependency array to ensure it is correctly monitored

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
      <Button className="me-2" type="submit" variant="outline-success">
        <i className="fa-solid fa-magnifying-glass"></i>
      </Button>
    </Form>
  );
};

export default SearchRecipes;
