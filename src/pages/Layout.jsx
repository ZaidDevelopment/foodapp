import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

export default function Layout({ setFoodData }) {
    return (
        <>
            <NavigationBar setFoodData={setFoodData} />
            <Outlet />
            <Footer />
        </>
    );
}
