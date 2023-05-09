import { createContext, useState } from "react";
import {signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        onAuthStateChanged
    } from 'firebase/auth'
import { auth } from "../Firebase-config";

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [modal, setModal] = useState({
        signup: false,
        signin: false
    })

    const toggle = (modal) => {

        if(modal === 'signup') {
            setModal({
                signup: true,
                signin: false
            })
        }
        if(modal === 'signin') {
            setModal({
                signup: false,
                signin: true
            })
        }
        if(modal === 'close') {
            setModal({
                signup: false,
                signin: false
            })
        }
    }

    return (
        <UserContext.Provider value={{ modal, toggle }}>
            {props.children}
        </UserContext.Provider>
    )
}