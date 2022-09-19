import React from "react";
import { agencyDeskImages } from "../../Resources/Images/Image";
import "../../Resources/CSS/landingPageBanner.scss"

const LandingPageBanner = () => {
    return (
        <>
            <div className="homeBanner">
                <div className="container">
                    <h1>A DIGITAL AGENCY.</h1>
                    <div className="row featureItems">
                        <div className="col-12 col-lg-4 features">
                            <img src={agencyDeskImages.strategyIcon} alt="" />
                            <h4>Business Stratagy</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                        <div className="col-12 col-lg-4 features">
                            <img src={agencyDeskImages.developmentIcon} alt="" />
                            <h4>Website Development</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                        <div className="col-12 col-lg-4 features">
                            <img src={agencyDeskImages.marketingIcon} alt="" />
                            <h4>Marketing & Reporting</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPageBanner;