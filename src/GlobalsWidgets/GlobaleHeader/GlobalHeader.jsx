import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { agencyDeskImages } from '../../Resources/Images/Image'
import "../../Resources/CSS/globalHeader.scss"
import { GlobalContext } from "../../ContextAPI/ContextAPI"


export default function GlobalHeader() {

    const { signout, user } = useContext(GlobalContext);
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await signout();
            navigate("/login")

        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg myNav">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={agencyDeskImages.brandLogo} alt="" />
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
                            {
                                !user ?
                                    <>
                                        <li className="nav-item">
                                            <button onClick={() => navigate("/login")}>Login</button>
                                        </li>

                                    </> :
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <button onClick={logout}>Log out</button>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
