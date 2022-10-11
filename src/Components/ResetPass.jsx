import React,{useState, useContext} from 'react';
import {agencyDeskImages} from "../Resources/Images/Image";
import {Link,useNavigate} from "react-router-dom";
import {GlobalContext} from "../ContextAPI/ContextAPI"
import "../Resources/CSS/authform.scss"

export default function Signup() {
    const [email, setEmail] = useState("");

    const {resetpass} = useContext(GlobalContext);
    const navigate = useNavigate();
    const submitHandle = async (e) => {
        e.preventDefault();
        try {
            await resetpass(email);
            navigate("/login")
        }catch(err) {
            console.log(err.message);
        }
    }
  return (
    <div className="authform">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-7">
                <img src={agencyDeskImages.world} alt="" />
                </div>
                <div className="col-12 col-lg-5">
                    <h2>Forgot Password</h2>
                    <form action="" onSubmit={submitHandle}>
                        <div className="email">
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" placeholder='Write your email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <input type="submit" value="submit" />
                        <p>Back to <Link to="/">Home</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
