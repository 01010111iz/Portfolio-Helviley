import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Content from "../Content/index";
import About from "../About/index.js";
import Resume from "../Resume/index.js";
import Contact from "../Contact/index.js";

const RouterWay = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Content />} path="/" />
          <Route element={<About />} path="/About/index" />
          <Route element={<Resume />} path="/Components/Resume/index" />
          <Route element={<Contact />} path="/Components/Contact/index" />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RouterWay;
