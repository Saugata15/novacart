import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router';

const ProtectedRoutes = () => {
    const {loggedInUser} = useContext(AuthContext);

    if(!loggedInUser){
        return <Navigate to={"/"} replace/>
    }

  return <Outlet/>
}

export default ProtectedRoutes
