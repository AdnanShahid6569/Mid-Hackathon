import React from 'react'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Dashboard from './Components/BasicComponents/Dashboard/Dashboard'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='signup' element={<SignUp />}/>
      <Route path='login' element={<Login />}/>
      <Route path='/Dashboard' element={<Dashboard />}/>
    </Routes>
    </>
  )
}

export default App