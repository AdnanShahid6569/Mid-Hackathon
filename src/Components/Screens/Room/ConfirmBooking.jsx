import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ConfirmBooking.module.css'; // Import CSS Module
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

const ConfirmBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [userData, setUserData] = useState(null);

  const dataget = async () => {
    await axios.get('http://localhost:3000/rooms')
      .then((res) => {
        setRooms(res.data);
      });
    };
    
    useEffect(() => {
    dataget();
  }, []);
  
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
    return <div>No user data found.</div>;
  }
  const D = new Date().toLocaleDateString()
  console.log(D);
  
  const room = rooms.find((room) => room.RoomID === Number(id));   
let setRoomData = {
  bookingDate:D,
roomData: room
}
console.log(setRoomData);

  if (!room) {
    return <div>No Booking</div>;
  }

const confirm = async()=>{
  const confirmDetail = await addDoc(collection(db,'RoomDetail'),setRoomData)
  console.log(confirmDetail);

  localStorage.setItem("RoomDetail",JSON.stringify(setRoomData))
  
    navigate("/Dashboard/custumer")
}
  

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src={room.Image}
            alt={`Room ${room.RoomNumber}`}
            className={styles.image}
          />
        </div>
        <div className={styles.detailsSection}>
          <h2>Customer Details</h2>
          <p><strong>Date:</strong> {D}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Role:</strong> {userData.selValue}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
        <div className={styles.detailsSection}>
          <h2>Room Details</h2>
          <p><strong>Room Number:</strong> {room.RoomNumber}</p>
          <p><strong>Room Type:</strong> {room.RoomType}</p>
          <p><strong>Status:</strong> {room.Status}</p>
          <p><strong>Price:</strong> ₹{room.Price}/night</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.actions}>
          <button className={`${styles.button} ${styles.backButton}`} onClick={() => navigate('/Dashboard/Room')}>Back</button>
          <button className={`${styles.button} ${styles.confirmButton}`} onClick={confirm}>Confirm Booking</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;