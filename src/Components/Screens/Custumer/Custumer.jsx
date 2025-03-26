import React, { useEffect, useState } from 'react'
import '../Profile/ProfileCard.css'
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
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


  const Roomdata = localStorage.getItem('RoomDetail');

  const RoomparsedData = JSON.parse(Roomdata);
  const Date =RoomparsedData.bookingDate;
  const RoomNum = RoomparsedData.roomData.RoomNumber;
  const RoomSts = RoomparsedData.roomData.Status;
  const RoomPrice = RoomparsedData.roomData.Price;  
  


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
          <p><strong>Date: </strong>{Date ? Date : '....'}</p>
          <p><strong>RoomNumber: </strong>Room {RoomNum ? RoomNum :'....'}</p>
          <p><strong>Status: </strong> {RoomSts ? "Booked" : "Available"}</p>
          <p><strong>Price: </strong> ₹{RoomPrice ? RoomPrice : "...."}/night</p>
        </div>
      </div>
    </>

  )
}

export default Custumer