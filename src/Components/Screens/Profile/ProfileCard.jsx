import React, { useEffect, useState } from 'react';
import './ProfileCard.css'; // Import the CSS file
import { db } from '../../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ProfileCard = () => {  
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
    <div className="profile-container">
        <div className="profile-card">
        <div className="profile-image">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6rKwDbEN_M9FCcve-ozbDkUUn6VkEZ7xfVw&s' alt="Profile" />
          </div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>lastName:</strong> {userData.lastname}</p>
          <p><strong>Role:</strong> {userData.selValue}</p>
          <p><strong>Password:</strong> {userData.pass}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>ID:</strong> {convertID}</p>
         
        </div>
    </div>
  );
};

export default ProfileCard;