import React from 'react';
import LandingPageBanner from '../GlobalsWidgets/Banners/LandingPageBanner';
import { agencyDeskImages } from "../Resources/Images/Image";
import "../Resources/CSS/home.scss";
import SingleService from '../GlobalsWidgets/Services/SingleService';
import { BusinessStrategy, WebsiteDevelopment, Marketing, MobileApp } from '../Resources/Icons/CustomIcons';
import AboutUs from '../GlobalsWidgets/GlobalSection/AboutUs';
import OurFunFact from '../GlobalsWidgets/GlobalSection/OurFunFact';


export default function Home() {
  return (
    <>
      <LandingPageBanner />
      <AboutUs img={agencyDeskImages.aboutUs}/>
      <div className="ourServices">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 leftContent">
              <h2>Services</h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
              <button>Request Custom Services</button>
            </div>
            <div className="col-12 col-lg-8">
              <div className="row">
                <div className="col-12 col-md-6">
                  <SingleService
                    icon={< BusinessStrategy />}
                    title="Business Stratagy"
                    text="I throw myself down among the tall grass by the stream as I lie close to the earth."
                    theme="white"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <SingleService
                    icon={< WebsiteDevelopment />}
                    title="Website Development"
                    text="I throw myself down among the tall grass by the stream as I lie close to the earth."
                    theme="white"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <SingleService
                    icon={< Marketing />}
                    title="Marketing & Reporting"
                    text="I throw myself down among the tall grass by the stream as I lie close to the earth."
                    theme="white"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <SingleService
                    icon={< MobileApp />}
                    title="Mobile App Development"
                    text="I throw myself down among the tall grass by the stream as I lie close to the earth."
                    theme="white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurFunFact />
      <div className="latestNews">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h2>Latest News</h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
            </div>
            <div className="col-12 col-lg-6 margin-left-auto topbutton">
              <button>View all news</button>
            </div>
          </div>
          <div className="row allNews">
            <div className="col-12 col-lg-4 news">
              <div className="newsCotainer">
                <img src={agencyDeskImages.blog1} alt="blog1" />
                <div className="newsContent">
                  <span>Development</span>
                  <p>Getting tickets to the big show</p>
                  <button>Read more</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 news">
              <div className="newsCotainer">
                <img src={agencyDeskImages.blog2} alt="blog2" />
                <div className="newsContent">
                  <span>Management</span>
                  <p>A big ticket gone to be an interesting</p>
                  <button>Read more</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 news">
              <div className="newsCotainer">
                <img src={agencyDeskImages.blog3} alt="blog3" />
                <div className="newsContent">
                  <span>Design</span>
                  <p>The Home of the Future Could Bebes</p>
                  <button>Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
