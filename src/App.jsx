import React, { useContext } from 'react'
import GlobalHeader from './GlobalsWidgets/GlobaleHeader/GlobalHeader'
import GlobalFooter from './GlobalsWidgets/GlobalFooter/GlobalFooter'
import "./Resources/CSS/global.scss"
import { Link } from "react-router-dom"
import { RiArrowLeftSLine } from "react-icons/ri";
import Routers from './Routers/Routers'
import { GlobalContext } from "./ContextAPI/ContextAPI"


export default function App() {
  const {user} = useContext(GlobalContext);
  return (
    <>
      <GlobalHeader />
      <Routers />
      {
        !user ? "" :
          <>
            <div className="adminPanel">
              <div className="link">
                <RiArrowLeftSLine />
                <Link to="/admin">Go to dashbord</Link>
              </div>
            </div>
          </>
      }
      <GlobalFooter />
    </>
  )
}
