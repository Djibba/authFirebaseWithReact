import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDvOj6kvNfYvJF5kkEbVWQrTgv4nTd_ENg",
  authDomain: "react-auth-20a5d.firebaseapp.com",
  projectId: "react-auth-20a5d",
  storageBucket: "react-auth-20a5d.appspot.com",
  messagingSenderId: "315457130301",
  appId: "1:315457130301:web:babd21d93b6804346cff54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);