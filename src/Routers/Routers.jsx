import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Blog from "../Components/Blog";
import Dashbord from "../Components/Dashbords/Dashboard";
import NewsLetterList from '../Components/Dashbords/NewsLetterList';
import ContactList from '../Components/Dashbords/ContactList';
import BlogList from '../Components/Dashbords/BlogList';

export default function Routers() {
  return (
    <>
        <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Dashbord />}>
              <Route path="newsletter" element={<NewsLetterList />}/>
              <Route path="contact" element={<ContactList />}/>
              <Route path="blog" element={<BlogList />}/>
            </Route>
        </Routes>
    </>
  )
}
