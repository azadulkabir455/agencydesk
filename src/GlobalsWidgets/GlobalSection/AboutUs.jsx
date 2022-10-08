import React from 'react'
import "../../Resources/CSS/aboutUs.scss"

export default function AboutUs(props) {
    return (
        <>
            <div className="aboutUs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-12">
                            <img src={props.img} alt="" className={props.classOne}/>
                        </div>
                        <div className={`col-lg-7 col-12 leftContent ${props.classTwo}`}>
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
        </>
    )
}
