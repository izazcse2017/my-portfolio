import React from "react";
import "./App.css";
import Header from "components/header";
import { Route, Routes } from "react-router-dom";
import Home from "pages/home";
import Projects from "pages/projects";
import Blogs from "pages/blogs";
import Contact from "pages/contacts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/blogs"} element={<Blogs />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
