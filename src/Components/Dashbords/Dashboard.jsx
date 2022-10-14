import React from 'react';
import { NavLink, Outlet, Link } from "react-router-dom";
import { RiArrowLeftSLine, RiNewspaperFill, RiContactsFill, RiBookReadFill } from "react-icons/ri";
import "../../Resources/CSS/Dashbord/dashbord.scss"
import useFetch from '../../CustomHooks/useFetch';

export default function Dashboard() {
  const [newsletter] = useFetch("http://localhost:3001/newsletter");
  const [contact] = useFetch("http://localhost:3001/contact");
  const [blog] = useFetch("http://localhost:3001/blog");
  return (
    <>
      <div className="dashbord">
        <div className="container-fluide">
          <div className="sidebar">
            <div className="backHome">
              <Link to="/">
                <RiArrowLeftSLine />
                <span>Home</span>
              </Link>
            </div>
            <div className="dashbordLink">
              <ul>
                <li><NavLink to="/admin/newsletter"><RiNewspaperFill />Newsletter</NavLink></li>
                <li><NavLink to="/admin/Contact"><RiContactsFill />Contact</NavLink></li>
                <li><NavLink to="/admin/blog"><RiBookReadFill />Blog</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="mainContent">
            <Outlet />
            {/* <div className="dashbordSummery">
              <div className="container-fluide">
                <div className="row">
                  <div className="col-12 col-lg-4 ">
                    <div className="summery">
                      <h2>Total newsletter count</h2>
                      <p>{newsletter.length}</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="summery">
                      <h2>Total contact-info count</h2>
                      <p>{contact.length}</p>
                    </div>

                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="summery">
                      <h2>Total blog-info count</h2>
                      <p>{blog.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
