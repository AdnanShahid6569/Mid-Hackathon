import React, { useEffect, useState } from 'react'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Dashboard from './Components/BasicComponents/Dashboard/Dashboard'
import Users from './Components/Screens/Users/Users'
import Custumer from './Components/Screens/Custumer/Custumer'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from './firebaseConfig'
import ProtectedRoute from './Components/BasicComponents/ProtectedRoute/ProtectedRoute'
import Room from './Components/Screens/Room/Room'
import RoomA from './Components/Screens/Room/RoomA'

const App = () => {
    
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='signup' element={<SignUp />}/>
      <Route path='login' element={<Login />}/>

      <Route path="/Dashboard" element={<Dashboard />}>
          {/* Admin can access Users */}
          <Route
            path="Users"
            element={
              <ProtectedRoute role="Admin">
                <Users />
              </ProtectedRoute>
            }
          />
          {/* Both Admin and User can access Custumer */}
          <Route
            path="custumer"
            element={
              <ProtectedRoute role={['Admin', 'User']}>
                <Custumer />
              </ProtectedRoute>
            }

          />

        <Route
            path="Room"
            element={
              <ProtectedRoute role={['Admin', 'User']}>
                <Room />
              </ProtectedRoute>
            }
            
            />
            <Route
              path="RoomAdmin"
              element={
                <ProtectedRoute role='Admin'>
                  <RoomA />
                </ProtectedRoute>
              }
  
            />

            </Route>
    </Routes>
    </>
  )
}

export default App