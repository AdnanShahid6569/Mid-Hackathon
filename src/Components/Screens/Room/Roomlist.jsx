import React, { useEffect, useState } from 'react';
// import rooms from './RoomData'; 
import './Roomlist.css'; 
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import axios from 'axios';

const RoomList = () => {
  const [rooms,setRooms] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/rooms')
    .then((res) =>{
     setRooms(res.data);
      
    })
  },[])

    const navigate = useNavigate();
    const createRoom =()=>{
      navigate('/Dashboard/createRoom')
    }

  const data = localStorage.getItem("UserData")
    const parseData = JSON.parse(data)
    // console.log(parseData);
    const role = parseData.selValue;
    
  return (
    <div className="room-list">
      <div className='room-head'>
        <h1>Hotel Rooms</h1>
      {role === "Admin" ? <button onClick={createRoom}>Create Room</button> : <button style={{pointerEvents:'none',opacity:'0.5'}} >Create Room</button>}
      </div>
      <div className="rooms-container">
        {rooms.map((room) => (
          <div key={room.RoomID} className="room-card">
            <img
              src={room.Image}
              alt={`Room ${room.RoomNumber}`}
              className="room-image"
            />
            <div className="room-details">
              <h2>Room {room.RoomNumber}</h2>
              <p><strong>Type:</strong> {room.RoomType}</p>
              <p><strong>Status:</strong> {room.Status}</p>
              <p><strong>Price:</strong> ₹{room.Price}/night</p>
              {/* <button className="details-button" onClick={()=>{
                    navigate(`/Dashboard/Roomdetail/${room.RoomID}`);
              }}>Details</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;