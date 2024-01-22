import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "../components/header";
import { Home } from "../pages/home-page";
import { About } from "../pages/about-me";
import { Experiences } from "../pages/experiences";
import { Curriculum } from "../pages/curriculum";
import { Portfolio } from "../pages/portfolio";
import { Contact } from "../pages/contact";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/about" element={ <About /> } />
                <Route exact path="/experiences" element={ <Experiences /> } />
                <Route exact path="/cv" element={ <Curriculum /> } />
                <Route exact path="/portfolio" element={ <Portfolio /> } />
                <Route exact path="/contact" element={ <Contact /> } />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }