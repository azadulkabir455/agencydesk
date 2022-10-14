
import React, { useState, useEffect } from 'react';
import useFetch from "../../CustomHooks/useFetch"
import "../../Resources/CSS/Dashbord/dashbord.scss"

export default function NewsLetterList() {
    const [newsletterId, setNewsletterId] = useState();
    const [newsletter, setNewsletter] = useState("")
    const [data] = useFetch("http://localhost:3001/newsletter");
    const deleteEmail = (id) => {
        fetch(`http://localhost:3001/newsletter/${id}`, {
            method: "DELETE",
        }).then((response) => {
            response.json().then((data) => { })
        })
    }
    const selectEmail = (id) => {
        let item = data[id - 1]
        setNewsletter(item.newsletter);
        setNewsletterId(item.id);
    }
    const updateEmail = () => {
        let item = {newsletter};
        fetch(`http://localhost:3001/newsletter/${newsletterId}`,{
            method:"PUT",
            headers: {
                "Accept":"Application/json",
                "Content-Type":"Application/json"
            },
            body: JSON.stringify(item)
        }).then((respose) => {
            respose.json().then((data) => {})
        })
    }
    return (
        <>
            <div className="newsLetter">
                <div className="container-fluid">
                    {
                        data.map((item) =>
                            <div className="row email" key={item.id}>
                                <div className="col-12 col-lg-8">
                                    <p>{item.newsletter}</p>
                                </div>
                                <div className="col-12 col-lg-4 btnGroup">
                                    <button className="editButton" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => selectEmail(item.id)}>Edit</button>
                                    <button className="deleteButton" onClick={() => deleteEmail(item.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Edit Newsletter</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" value={newsletter} placeholder='Write your email' name="newsletter" onChange={(e) => setNewsletter(e.target.value)} />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button"  data-bs-dismiss="modal" onClick={updateEmail}>Update Email</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



