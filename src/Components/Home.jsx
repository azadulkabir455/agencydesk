import React from 'react';
import LandingPageBanner from '../GlobalsWidgets/Banners/LandingPageBanner';
import { agencyDeskImages } from "../Resources/Images/Image";
import "../Resources/CSS/home.scss";
import SingleService from '../GlobalsWidgets/Services/SingleService';
import { BusinessStrategy, WebsiteDevelopment, Marketing, MobileApp } from '../Resources/Icons/CustomIcons';


export default function Home() {
  return (
    <>
      <LandingPageBanner />
      <div className="aboutUs">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12">
              <img src={agencyDeskImages.aboutUs} alt="" />
            </div>
            <div className="col-lg-7 col-12 leftContent">
              <h2>About</h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
              <div className="row innerContent">
                <div className="col-md-6 col-12">
                  <h4>Who we are</h4>
                  <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
                <div className="col-md-6 col-12">
                  <h4>Who we are</h4>
                  <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <div className="funFact">
        <div className="container">
          <h4>Our Fun Facts</h4>
          <div className="row">
            <div className="col-12 col-lg-4 counter">
              <div className="number">
                199+
              </div>
              <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
            </div>
            <div className="col-12 col-lg-4 counter">
              <div className="number">
                40+
              </div>
              <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
            </div>
            <div className="col-12 col-lg-4 counter">
              <div className="number">
                510+
              </div>
              <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
            </div>
          </div>
        </div>
      </div>
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
