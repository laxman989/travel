import React from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Booking from "./components/Booking";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {

    return <>
        <Header />
        <Home />
        <Booking />
        <Packages />
        <Services />
        <Gallery />
        <About />
        <Footer />
    </>
}

export default App;