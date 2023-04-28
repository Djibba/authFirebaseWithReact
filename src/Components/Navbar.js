import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

export default function Navbar() {

  const {toggle} = useContext(UserContext)

  return (
    <nav className="navbar navbar-light bg-light px-4">
        <Link to='/' className='navbar-brand'>
            AuthJS
        </Link>

        <div>
          <button className='btn btn-primary' onClick={() => toggle('signup')} >Sign Up</button>
          <button className='btn btn-primary ms-2' onClick={() => toggle('signin')}>Sign In</button>
          <button className='btn btn-danger ms-2'>Logout</button>
        </div>
    </nav>
  )
}
