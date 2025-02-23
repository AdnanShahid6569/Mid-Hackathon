import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRoute = () => {
  return !localStorage.getItem('UID') ? <Outlet /> : <Navigate to="Dashboard"/>
}

export default AuthRoute