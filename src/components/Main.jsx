import { Outlet } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";

const Main = () => {
    return (
        <main className="main">
            <NavigationLinks />
            <Outlet />
        </main>
    );
}

export default Main;