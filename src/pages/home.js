import React, { lazy } from "react";
import Carousel from "../component/Carousel/Carousel";
import BestProducts from "../component/best_products/best_products";
import Category from "../component/category/category";
import Featured from "../component/featured/featured";
import { Footer } from "../component/footer/footer";
import Header from "../component/header/header";
import Parallax from "../component/parallax/parallax";
import Professional from "../component/professional/professional";
import Login from "./login/login";
import Register from "./register/register";

const Procomp = React.lazy(()=>import('../component/professional/professional'))
function Home(){
    return(
        <>
        <Carousel/>
        <Featured/>
        <Parallax/>
        <BestProducts/>
        </>
    )
}
export default Home