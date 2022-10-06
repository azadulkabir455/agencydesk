import React,{useState} from 'react';
import { NavLink,Link } from 'react-router-dom';
import { RiFacebookFill, RiInstagramLine, RiTwitterLine, RiYoutubeLine } from "react-icons/ri";
import "../../Resources/CSS/globalFooter.scss";

export default function GlobalFooter() {
    const [newsletter, setNewsletter] = useState("");
    const [newsletterErr, setNewsletterErr] = useState("");
    console.log(newsletter)
    const submitHandler = (e) => {
        e.preventDefault();
        setNewsletter("");
    }
    const emailHandler = (e) => {
        let email = e.target.value
        if(!/\S+@\S+\.\S+/.test(email)) {
            setNewsletterErr("Email is not correct")
        }else {
            setNewsletterErr("");
        }
        setNewsletter(email);
    }
    const saveData = () => {
        let item = {newsletter};
        fetch("http://localhost:3001/newsletter",{
            method: "POST",
            headers: {
              "Accept":"application/json",
              "Content-type":"application/json"
            },
            body:JSON.stringify(item)
          }).then((response) => {
            response.json().then((data) => {})
          })

    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-12  footer">
                        <div className="footerLeftContent">
                            <p>Ready to do this</p>
                            <h2>Let's get to work</h2>
                            <form onSubmit={submitHandler}>
                                <label htmlFor="newsletter">Get updated</label>
                                <input 
                                type="email"
                                name="email"
                                id="newsletter" 
                                className='newsletter form-control' 
                                placeholder='Write your email'
                                onChange={emailHandler}
                                />
                                <span>{newsletterErr}</span>
                                <input 
                                type="submit" 
                                value="submit" 
                                onClick={saveData}
                                className="btn btn-primary"/>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12 rightSide">
                            <div className="row">
                                <div className="col-sm-5 col-12">
                                    <h4>Quick Link</h4>
                                    <ul className='nav flex-column'>
                                        <li className='nav-item'>
                                            <NavLink to="/contact" className="nav-link">Let's talk</NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink to="/about" className="nav-link">About</NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink to="/blog" className="nav-link">Blog</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-sm-7 col-12'>
                                    <h4>Say Hello</h4>
                                    <div className="footerEmails">
                                        <Link to="mailto:admin@example.com">admin@example.com</Link>
                                        <Link to="mailto:hr@example.com">hr@example.com</Link>
                                    </div>
                                    <div className="footerSocialLink">
                                        <ul>
                                            <li>
                                                <Link to="/"><RiFacebookFill /></Link>
                                            </li>
                                            <li>
                                                <Link to="/"><RiInstagramLine /></Link>
                                            </li>
                                            <li>
                                                <Link to="/"><RiTwitterLine /></Link>
                                            </li>
                                            <li>
                                                <Link to="/"><RiYoutubeLine /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        <p className='copyright'>Copyright © 2022 Azad ul Kabir. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}
