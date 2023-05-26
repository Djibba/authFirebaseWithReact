import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase-config';
import { signOut } from 'firebase/auth';

export default function Navbar() {

  const {toggle} = useContext(UserContext)
  const navigate = useNavigate()
  const logOut = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      alert("Error logging out")
    }
  }


  return (
    <nav className="navbar navbar-light bg-light px-4">
        <Link to='/' className='navbar-brand'>
            AuthJS
        </Link>

        <div>
          <button className='btn btn-primary' onClick={() => toggle('signup')} >Sign Up</button>
          <button className='btn btn-primary ms-2' onClick={() => toggle('signin')}>Sign In</button>
          <button onClick={logOut} className='btn btn-danger ms-2'>Logout</button>
        </div>
    </nav>
  )
}
