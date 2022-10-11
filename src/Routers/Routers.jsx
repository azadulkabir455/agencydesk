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
import Singin from '../Components/Singin';
import Singup from '../Components/Singup';
import ResetPass from '../Components/ResetPass';
import ProtectedRoutes from "./ProtectedRoutes"


export default function Routers() {
  return (
    <>
        <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<ProtectedRoutes><Blog /></ProtectedRoutes>} />
            <Route path="/contact" element={<ProtectedRoutes><Contact /></ProtectedRoutes>} />
            <Route path ="/login" element={<Singin />} />
            <Route path ="/signup" element={<Singup />} />
            <Route path ="/resetpass" element={<ResetPass />} />
            <Route path="/admin" element={<ProtectedRoutes><Dashbord /></ProtectedRoutes>}>
              <Route path="newsletter" element={<NewsLetterList />}/>
              <Route path="contact" element={<ContactList />}/>
              <Route path="blog" element={<BlogList />}/>
            </Route>
        </Routes>
    </>
  )
}
