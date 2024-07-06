import { useState } from "react";
import "./App.css";
import RecipeDetails from "./components/RecipeDetails";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import RegisterAccount from "./pages/RegisterAccount";
import PageNotFound from "./pages/PageNotFound";
import DemoPage from "./pages/DemoPage";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(""); //656329
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout setFoodData={setFoodData} />}>
            <Route
              index
              element={<Home foodData={foodData} setFoodId={setFoodId} />}
            />
            <Route
              path="RecipeDetails"
              element={<RecipeDetails foodId={foodId} />}
            />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Pricing" element={<Pricing />} />
            <Route path="Login" element={<Login />} />
            <Route path="RegisterAccount" element={<RegisterAccount />} />
            <Route path="DemoPage" element={<DemoPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
