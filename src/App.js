import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import PackageDetailPage from "./pages/PackageDetailPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {

    return <>
        <Header />
            <Routes>
                <Route  exact path="/" Component={HomePage} />
                <Route path="/about" Component={AboutPage} />
                <Route path="/package/:id" Component={PackageDetailPage} />
                <Route path="*" Component={ErrorPage} />
            </Routes>
        <Footer />
    </>
}

export default App;