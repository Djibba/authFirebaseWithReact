import React, {useContext} from 'react'
import { UserContext } from '../../Context/UserContext'
import { useLocation, Outlet, Navigate } from 'react-router-dom';


export default function Private() {

    const {currentUser} = useContext(UserContext)
    // const location = useLocation()
    if(!currentUser) {
        return <Navigate to='/' />
    }

  return (
    <div className='container'>
        <Outlet />
    </div>
  )
}
