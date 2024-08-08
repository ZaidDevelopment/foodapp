import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

const Layout = ({ setFoodData }) => {
  return (
    <>
      <NavigationBar setFoodData={setFoodData} />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
