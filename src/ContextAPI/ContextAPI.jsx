import React, { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,sendPasswordResetEmail, onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../firebase-config'

const GlobalContext = createContext();


const GlobalDataContainer = (props) => {

    const [user, setUser] = useState([])


    // Authentication
    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("signup successfully")
        })
        .catch((err) => {
            console.log(err.message)
        })
    };
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("Login successfully")
        })
        .catch((err) => {
            console.log(err.message)
        })
    };

    const signout = () => {
        signOut(auth)
        .then(() => {
            console.log("Signout successfully")
        })
        .catch((err) => {
            console.log(err.message)
        })
    };
    const resetpass = (email) => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log("Reset email sent")
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    },[])
    return (
        <GlobalContext.Provider value={{user, signup, login, signout, resetpass}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalDataContainer };