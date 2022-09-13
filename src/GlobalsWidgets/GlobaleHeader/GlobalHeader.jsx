import React from 'react'
import { NavLink } from 'react-router-dom'
import {Brandlogo} from '../../Resources/Images/Image'
import "../../Resources/CSS/globalHeader.scss"


export default function GlobalHeader() {
  return (
    <>
        <nav className="navbar navbar-expand-lg myNav">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={Brandlogo.brandLogo} alt="" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    </>
  )
}
