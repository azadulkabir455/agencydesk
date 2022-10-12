import React from 'react';
import useFetch from '../../CustomHooks/useFetch';

export default function ContactList() {
  const [data] = useFetch("http://localhost:3001/contact");
  return (
    <>
      <div className="contactList">
        <div className="container-fluide">
          {
            data.map((item) =>
              <div className="row" key={item.id}>
                <div className="col-12 col-lg-7">
                  <h4>{item.name}</h4>
                  <div className="contact-info">
                    <p>{item.email}</p>
                    <p>{item.phone}</p>
                  </div>
                  <h2>{item.subject}</h2>
                  <p>{item.message}</p>
                </div>
                <div className="col-12 col-lg-5">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
