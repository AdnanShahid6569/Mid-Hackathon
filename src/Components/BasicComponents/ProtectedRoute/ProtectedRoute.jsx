import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  localStorage.getItem('uid') ? <Outlet /> : <Navigate to="Dashboard"/>
  const userData = JSON.parse(localStorage.getItem('UserData'));

  // If userData is not available, redirect to login
 if (!userData) {
    return <Navigate to="/login" />;
  } 

  // If role is an array, check if the user's role is included
  if (Array.isArray(role)) {
    if (!role.includes(userData.selValue)) {
      return <Navigate to="/login" />;
    }
  }
  // If role is a string, check if it matches the user's role
  else if (userData.selValue !== role) {
    alert("Sorry Only Admin Can Acess")
    return <Navigate to='/Dashboard'/>
  }

  // If authorized, render the children
  return children;
};

export default ProtectedRoute;