import Home from "./pages/Home";
import Ground from "./pages/Ground";
import Fuel from "./pages/Fuel";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Overfly from "./pages/Overfly";

const routes = [
    {
        path:"/",
        element:<Home/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/ground",
        element:<Ground/>
    },
    {
        path:"/fuel",
        element:<Fuel/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/overfly",
        element:<Overfly/>
    }
]

export default routes;