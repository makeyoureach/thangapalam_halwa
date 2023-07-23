import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import AboutUS from "./pages/about_us";
import Products from "./pages/products";
import Contact from "./pages/contact";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {path:"",element:<Home/>},
            {path:"/about",element:<AboutUS/>},
            {path:"/products",element:<Products/>},
            {path:"/contact",element:<Contact/>},
            {path:"/about",element:<AboutUS/>},
        ]

    }
])

export default router;