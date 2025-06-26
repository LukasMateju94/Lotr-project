import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const SharedLayout = () => {
    return <>
        <Navbar />
        <Outlet />
        <footer>Vytvořil Lukáš Matějů</footer>
    </>
}

export default SharedLayout