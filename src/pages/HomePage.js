import React from "react";
import Booking from "../components/Booking";
import Home from "../components/Home";
import Packages from "../components/Packages";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import About from "../components/About";

const HomePage = () => {
    return <>
        <Home />
        <Booking />
        <Packages />
        <Services />
        <Gallery />
        <About />
    </>
}

export default HomePage;