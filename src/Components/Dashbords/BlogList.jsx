import React, { useState } from 'react';
import useFetch from '../../CustomHooks/useFetch';
import { trimText } from './ContactList';

export default function BlogList() {
  const [data] = useFetch("http://localhost:3001/blog")

  const [inputs, setInputs] = useState({});
  const [blog, setBlog] = useState("Write your blog here");
  const [blogId, setBlogId] = useState();
  const [buttonChange, setButtonChange] = useState(false)

  const blogInfo = { ...inputs, blog };
  console.log(inputs)

  const fromHandle = (e) => {
    e.preventDefault();

  }
  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }))
  }
  const blogHandle = (e) => {
    setBlog(e.target.value);
  }
  const createBlog = () => {
    let item = blogInfo;
    fetch("http://localhost:3001/blog", {
      method: "POST",
      headers: {
        "Accept": "application/jason",
        "Content-type": "application/json"
      },
      body: JSON.stringify(item)
    }).then((response) => {
      response.json().then((data) => {
      })
    })
  }
  const deleteBlog = (id) => {
    fetch(`http://localhost:3001/blog/${id}`, {
      method: "DELETE",
    }).then((respose) => {
      respose.json().then((data) => {

      })
    })
  }
  const selectBlog = (id) => {
    let item = data[id - 1];
    setInputs({ name: item.name, type: item.type });
    setBlog(item.blog)
    setBlogId(item.id)

  }

  const updateBlog = () => {
    let item = blogInfo;
    fetch(`http://localhost:3001/blog/${blogId}`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(item)
    }).then((response) => {
      response.json().then((data) => { })
    })
  }
  const buttonToggle = (value) => {
    setButtonChange(value)
  }

  return (
    <>
      <div className="bloglist">
        <div className="container-flude">
          <div className="addBlog">
            <button data-bs-toggle="modal" data-bs-target="#addBlog" onClick={() => buttonToggle(true)}>Add Blog</button>
          </div>
          {
            data.map((item) =>
              <>
                <div className="row blog">
                  <div className="col-12 col-lg-9">
                    <h4>{item.name}</h4>
                    <span>{item.type}</span>
                    <p>{trimText(item.blog)}</p>
                  </div>
                  <div className="col-12 col-lg-3 btnGroup">
                    <button className='editButton' onClick={() => [selectBlog(item.id), buttonToggle(false)]} data-bs-toggle="modal" data-bs-target="#addBlog">Edit</button>
                    <button className='deleteButton' onClick={() => deleteBlog(item.id)}>Delete</button>
                  </div>
                </div>
              </>
            )
          }
        </div>
      </div>

      <div className="modal fade" id="addBlog" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Blog</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="#" onSubmit={fromHandle}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={inputs.name} placeholder='write your name' onChange={inputHandle} />
                <label htmlFor="type">Type:</label>
                <select name="type" id="type" onChange={inputHandle}>Blog Type:
                  <option value="Creative Blog">Creative Blog</option>
                  <option value="Story Tell">Story tell</option>
                  <option value="Information">Information</option>
                </select>
                <label htmlFor="blog">Write your blog</label>
                <textarea name="blog" id="blog" value={blog} onChange={blogHandle} />
              </form>
            </div>
            <div className="modal-footer">
              {
                buttonChange ?
                  <button type="button" data-bs-dismiss="modal" onClick={createBlog}>Create Blog</button> :
                  <button type="button" data-bs-dismiss="modal" onClick={() => { updateBlog() }}>Update Blog</button>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
