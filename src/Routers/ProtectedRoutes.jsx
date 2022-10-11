import React,{useContext} from 'react';
import {GlobalContext} from "../ContextAPI/ContextAPI";
import {Navigate} from "react-router-dom"

export default function ProtectedRoutes({children}) {
  const {user} = useContext(GlobalContext);

  if(!user) {
    return <Navigate to="/login"/>
  }
  return children
}
