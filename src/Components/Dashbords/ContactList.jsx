import React,{useState} from 'react';
import useFetch from '../../CustomHooks/useFetch';

export default function ContactList() {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("Write your message")
  const [contactId, setContactId] = useState();
  const [data] = useFetch("http://localhost:3001/contact");

  const contactInfo = {...inputs, message};
  console.log(contactInfo)

  const deleteContactInfo = (id) => {
    fetch(`http://localhost:3001/contact/${id}`, {
      method: "DELETE",
  }).then((response) => {
      response.json().then((data) => { })
  })
  }

  const selectContactInfo = (id) => {
    let item = data[id - 1]
    setInputs({name:item.name, email: item.email, phone: item.phone, subject: item.subject });
    setMessage(item.message);
    setContactId(item.id);
  }
  const updateContactInfo = () => {
    let item = contactInfo;
    fetch(`http://localhost:3001/contact/${contactId}`,{
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
  const inputHandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputs(values => ({...values,[name]: value}))

  }
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
                  <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {selectContactInfo(item.id)}}>Edit</button>
                  <button onClick={() => deleteContactInfo(item.id)}>Delete</button>
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
                            <h4>Modal title</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" placeholder='Write your name' value={inputs.name} onChange={inputHandle}/>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" placeholder='Write your email' value={inputs.email} onChange={inputHandle}/>
                                <label htmlFor="phone">Phone:</label>
                                <input type="phone" id="phone" name="phone" placeholder='Write your phone' value={inputs.phone} onChange={inputHandle}/>
                                <label htmlFor="subject">Subject:</label>
                                <input type="text" id="subject" name="subject" placeholder='Write your subject' value={inputs.subject} onChange={inputHandle}/>
                                <label htmlFor="message">Message:</label>
                               <textarea value={message} name="message" id="message" onChange={(e) => setMessage(e.target.value)}/>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button"  data-bs-dismiss="modal" onClick={updateContactInfo}>Update Contact</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
