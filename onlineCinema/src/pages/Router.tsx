import App from "../App.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Home-Page/HomePage.tsx";

const Router = () => {
    return (
        <Routes>

            <Route index path='/' element={<HomePage />} />

        </Routes>
    );
};

export default Router;