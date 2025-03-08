import React, { useEffect, useState } from 'react'
import '../Profile/ProfileCard.css'
const Custumer = () => {

    const [userData, setUserData] = useState(null);
  
    const Userid = localStorage.getItem('uid');
    const convertID = JSON.parse(Userid)
    useEffect(() => {
      const data = localStorage.getItem('UserData');
      if (data) {
        try {
          const parsedData = JSON.parse(data);
          setUserData(parsedData);
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      }
    }, []);
  
    if (!userData) {
      return <div>No user data found.</div>
    }
  
  return (
    <>
     <h1>Custumer</h1>
     <div className='main'>

     <div className="profile-container">
        <div className="profile-card">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Role:</strong> {userData.selValue}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>ID:</strong> {convertID}</p>
         <div>
         </div>
        </div>
     </div>
     
     <div className='profile-card'>
     <h1>Booking History</h1>
     </div>
    </div>
     </>

  )
}

export default Custumer