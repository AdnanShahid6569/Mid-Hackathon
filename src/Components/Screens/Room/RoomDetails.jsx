import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Roomlist.css'
import axios from 'axios';


const RoomDetails = () => {
  const navigate = useNavigate();
  const [rooms,setRooms] = useState([]);
  const { id } = useParams();

  const dataget = async()=>{
   await axios.get('http://localhost:3000/rooms')
      .then((res)=>{
    setRooms(res.data)
      })
  }
  useEffect(()=>{
      dataget()
  },[])

  const room = rooms.find((room) => room.RoomID === Number(id));

  if (!room) {
    return <div className="room-not-found">Room not found!</div>;
  }


  return (
    <div className="room-details-container">
      <h1 className="room-title">Room {room.RoomNumber} Details</h1>
      <div className="room-content">
        <div className="room-image-container">
          <img
            src={room.Image}
            alt={`Room ${room.RoomNumber}`}
            className="room-image"
          />
        </div>
        <div className="room-info">
          <h2>{room.RoomType} Room</h2>
          <p className="room-status"><strong>Status:</strong> {room.Status}</p>
          <p className="room-price"><strong>Price:</strong> ₹{room.Price}/night</p>
          <p className="room-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="room-actions">
            <button className="edit-button" onClick={()=>{navigate('/Dashboard/Room')}}>Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetails;