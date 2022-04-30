import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/about/About";
import Details from "../components/details/Details";
import Header from "../components/header/Header";
import Login from "../components/login/Login";
import Page404 from "../components/Page404";
import Main from "../components/recipe/Main";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Main />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default AppRouter;
