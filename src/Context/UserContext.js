import { createContext, useState, useEffect } from "react";
import {signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        onAuthStateChanged
    } from 'firebase/auth'
import { auth } from "../Firebase-config";

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [currentUser, setCurrentUser] = useState()
    const [loadingData, setLoadingData] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            setLoadingData(false)
        })
        return unsubscribe
    }, [])

    const [modal, setModal] = useState({
        signup: false,
        signin: false
    })

    const signUp = (email, password) =>  createUserWithEmailAndPassword(auth, email, password)

    const signIn = (email, password) =>  signInWithEmailAndPassword(auth, email, password)

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
        <UserContext.Provider value={{ modal, toggle, signUp, currentUser, signIn }}>
            {!loadingData && props.children}
        </UserContext.Provider>
    )
}