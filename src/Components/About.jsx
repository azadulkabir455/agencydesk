import React from 'react';
import OtherPageBanner from '../GlobalsWidgets/Banners/OtherPageBanner';
import "../Resources/CSS/about.scss";
import AboutUs from "../GlobalsWidgets/GlobalSection/AboutUs";
import OurFunFact from "../GlobalsWidgets/GlobalSection/OurFunFact";
import { agencyDeskImages } from '../Resources/Images/Image';

export default function About() {
  return (
    <>
        <OtherPageBanner name="About us" />
        <AboutUs img={agencyDeskImages.aboutUsGirl} classOne="marginTop" classTwo="leftContentCenter" />
        <OurFunFact />
        <div className="findYourWork">
          <div className="container">
            <div className="row">
              <div className="col-12">
              <img src={agencyDeskImages.findingUs} alt="" /> 
                <div className="contentContainer">
                  <h4>Find Your Work Now</h4>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                  <button>Get started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}
