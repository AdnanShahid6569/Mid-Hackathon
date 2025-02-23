import React from 'react'
import './Home.css'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Home = () => {

    const navigate = useNavigate();
  return (
    <>
<div className='Img-Section'>
    <div className='content'>
        <h1>Hotel Management System</h1>
        <button className='signup-btn' onClick={()=>{navigate('signup')}}>Sign Up Now</button>
    </div>
</div>
    </>
  )
}

export default Home