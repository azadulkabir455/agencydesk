import React from 'react'
import "../../Resources/CSS/ourFunFact.scss"

export default function OurFunFact() {
    return (
        <>
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
        </>
    )
}
