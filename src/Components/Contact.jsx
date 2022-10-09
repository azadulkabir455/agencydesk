import React,{useState} from 'react';
import OtherPageBanner from '../GlobalsWidgets/Banners/OtherPageBanner';
import {Email, Headphone, Location} from "../Resources/Icons/CustomIcons";
import {Link} from "react-router-dom";
import "../Resources/CSS/contactUs.scss";
import {agencyDeskImages} from "../Resources/Images/Image"

export default function Contact() {

  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("Write your message");
  const contactInfo = {...inputs, message};
  console.log(contactInfo)

  const formHandle = (e) => {
    e.preventDefault();
  }

  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values =>({...values,[name]:value}))
  }
  const textareaHandle = (e) => {
    setMessage(e.target.value);
  }
  const saveData = () => {
    console.log("save data succesfully");
    let item = contactInfo;
    fetch("http://localhost:3001/contact",{
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-type":"application/json"
      },
      body: JSON.stringify(item)
    }).then((response) => {
      response.json().then((data) => {});
    })
  }
  return (
    <>
        <OtherPageBanner  name="Contact us"/>
        <div className="contactInfo">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="infoBox">
                  <div className="icon">
                    <Headphone />
                  </div>
                  <div className="infoText">
                    <h4>Contact With Phone Number</h4>
                    <p><Link to="tel:057254365456">+057 254 365 456</Link></p>
                    <p><Link to="tel:856325652984">+856 325 652 984</Link></p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="infoBox">
                  <div className="icon">
                    <Email />
                  </div>
                  <div className="infoText">
                    <h4>Email Address</h4>
                    <p><Link to="mailto:admin@gmail.com">admin@gmail.com</Link></p>
                    <p><Link to="mailto:example@gmail.com">example@gmail.com</Link></p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="infoBox">
                  <div className="icon">
                    <Location />
                  </div>
                  <div className="infoText">
                    <h4>Location</h4>
                    <p>5678 Bangla Main Road, cities 580 GBnagla, example 54786</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-7">
                <h3>Contact Us.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</p>
                <div className="form">
                  <form action="/" onSubmit={formHandle}>
                    <div className="inputField">
                      <label htmlFor="name">Name:</label>
                      <input type="text" name="name" id="name" placeholder='Write your name' value={inputs.name} onChange={inputHandle}/>
                    </div>
                    <div className="inputField">
                      <label htmlFor="email">Email:</label>
                      <input type="email" name="email" id="email" placeholder='Write your email' value={inputs.email} onChange={inputHandle}/>
                    </div>
                    <div className="inputField">
                      <label htmlFor="phone">Phone:</label>
                      <input type="phone" name="phone" id="phone" placeholder='Write your phone' value={inputs.phone} onChange={inputHandle}/>
                    </div>
                    <div className="inputField">
                      <label htmlFor="subject">Subject:</label>
                      <input type="text" name="subject" id="subject" placeholder='Write your subject' value={inputs.subjects} onChange={inputHandle}/>
                    </div>
                    <div className="inputField">
                      <label htmlFor="message">Message:</label>
                      <textarea value={message} name="message" id="message" onChange={textareaHandle}/>
                    </div>
                    <div className="inputField">
                      <input type="submit" value="submit" onClick={saveData}/>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <img src={agencyDeskImages.contactUs} alt="" />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
