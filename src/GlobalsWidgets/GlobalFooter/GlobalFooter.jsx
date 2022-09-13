import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
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
                    <div className="col-6 leftSide">
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
                    <div className="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-5">
                                    <h4>Quick Link</h4>
                                    <ul>
                                        <li><NavLink to="/about">About</NavLink></li>
                                        <li><NavLink to="/blog">Blog</NavLink></li>
                                        <li><NavLink to="/contact">Let's talk</NavLink></li>
                                    </ul>
                                </div>
                                <div className='col-7'>
                                    <h4>Say Hello</h4>
                                    <a>admin@example.com</a>
                                    <a>hr@example.com</a>
                                    <div className="footerSocialLink">
                                        <ul>
                                            <li><RiFacebookFill /></li>
                                            <li><RiInstagramLine /></li>
                                            <li><RiTwitterLine /></li>
                                            <li><RiYoutubeLine /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>Copyright © 2021 Rainbow-Themes. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}
