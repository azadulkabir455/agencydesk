import React from 'react'
import OtherPageBanner from '../GlobalsWidgets/Banners/OtherPageBanner';
import useFetch from '../CustomHooks/useFetch';
import "../Resources/CSS/blog.scss"
import {trimText} from "../Components/Dashbords/ContactList"

export default function Blog() {
  const [data] = useFetch("http://localhost:3001/blog");
  return (
    <>
      <OtherPageBanner name="Blog" />
      <div className="blog">
        <div className="container">
          <div className="row">
            {
              data.map((item) =>
                <>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="blogInfo">
                    <h4>{item.name}</h4>
                    <span>{item.type}</span>
                    <p>{trimText(item.blog)}</p>
                    <button>Read more</button>
                    </div>
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
