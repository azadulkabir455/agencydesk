
import React,{useEffect} from 'react';
import useFetch from "../../CustomHooks/useFetch"

export default function NewsLetterList() {
    const [data] = useFetch("http://localhost:3001/newsletter");
    const deleteEmail = (id) => {
        fetch(`http://localhost:3001/newsletter/${id}`,{
            method:"DELETE",
        }).then((response) => {
            response.json().then((data) => {})
        })
    }
    return (
        <>
            <div className="newsLetter">
                <div className="container-fluid">
                    {
                        data.map((item) =>
                                <div className="row"  key={item.id}>
                                    <div className="col-12 col-lg-8">
                                        {item.newsletter}
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <button>Edit</button>
                                        <button onClick={() => deleteEmail(item.id) }>Delete</button>
                                    </div>
                                </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

