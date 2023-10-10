import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "../components/header";
import { Home } from "../pages/home-page";
import { Footer } from "../components/footer/footer-infos";
import { Infos } from "../pages/infos";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/:route" element={ <Infos /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export { AppRoutes }