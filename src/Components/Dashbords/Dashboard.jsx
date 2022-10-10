import React from 'react';
import {NavLink, Outlet,Link} from "react-router-dom";
import {RiArrowLeftSLine,RiNewspaperFill,RiContactsFill,RiBookReadFill } from "react-icons/ri";
import "../../Resources/CSS/Dashbord/dashbord.scss"

export default function Dashboard() {
  return (
    <>
        <div className="dashbord">
          <div className="container-fluide">
            <div className="sidebar">
              <div className="backHome">
                <Link to="/">
                 <RiArrowLeftSLine/>
                   <span>Home</span>
                </Link>
              </div>
              <div className="dashbordLink">
                <ul>
                  <li><NavLink to="/admin/newsletter"><RiNewspaperFill />Newsletter</NavLink></li>
                  <li><NavLink to="/admin/Contact"><RiContactsFill/>Contact</NavLink></li>
                  <li><NavLink to="/admin/blog"><RiBookReadFill />Blog</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="mainContent">
              <Outlet />
            </div>
          </div>
        </div>
    </>
  )
}
