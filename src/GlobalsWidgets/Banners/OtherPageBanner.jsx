import React from "react";
import "../../Resources/CSS/otherPageBanner.scss";

const OtherPageBanner = (props) => {
    return(
        <>
            <div className="cotainer-fluid otherpagebn">
                <div className="headerContent">
                    <h1>{props.name}</h1>
                    <p>We serve to better life</p>
                </div>
                <div className="headerOverlay"></div>
            </div>
        </>
    )
}

export default OtherPageBanner;