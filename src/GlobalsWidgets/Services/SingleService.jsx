import React from 'react';
import "../../Resources/CSS/singleservice.scss";

const SingleService = (props) => {
    return (
        <>
            <div className={`singleService ${props.theme}`}>
                {props.icon}
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
        </>
    )
}

export default SingleService;