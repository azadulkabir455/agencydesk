import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Blog from "../Components/Blog";

export default function Routers() {
  return (
    <>
        <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  )
}
