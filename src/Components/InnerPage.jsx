import React,{useState,useEffect} from 'react'
import OtherPageBanner from '../GlobalsWidgets/Banners/OtherPageBanner'
import { useParams } from "react-router-dom"
import useFetch from '../CustomHooks/useFetch';

export default function InnerPage() {

    const [singleBlog, setSingleBlog] = useState({})
    const param = useParams();
    const { id } = param;
    const [blogs] = useFetch("http://localhost:3001/blog");
    console.log(blogs, id)

    useEffect(() => {
        const getSingleBlog = () => {
            setSingleBlog(blogs.find(blogs => blogs.id == id));
        }
        getSingleBlog();
    },[id])
    return (
        <>
            <OtherPageBanner name="inner page" />
            <div className="innerpage">
                <div className="container">

                    <div className="authorDetails">
                        {/* <p>{singleBlog.name}</p>
                        <span>{singleBlog.type}</span> */}
                    </div>
                    <div className="blogInfo">
                        {/* {singleBlog.blog} */}
                    </div>
                </div>
            </div>
        </>
    )
}
