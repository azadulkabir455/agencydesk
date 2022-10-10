
import React,{useState,useEffect} from 'react'

export default function NewsLetterList() {
    const [newsletter, setNewsletter] = useState([]);

    useEffect(() => {
        getEmails();
    },[])

    const getEmails = () => {
        fetch("http://localhost:3001/newsletter").then((response) => {
            response.json().then((data) => {
                setNewsletter(data)
            })
        })
    }
  return (
    <>
        <div className="newsLetter">
            <div className="container-fluid">
                <div className="row">
                    {
                        newsletter.map((item ) =>
                            <>
                                <div className="col-12 col-lg-8">
                                    {item.newsletter}
                                </div>
                                <div className="col-12 col-lg-4">
                                    <button>Delete</button>
                                    <button>Update</button>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    </>
  )
}

