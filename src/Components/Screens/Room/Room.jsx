import React from 'react'
import { rooms } from "./RoomData"; 
import styles from "./Rooms.module.css"; 
const Room = () => {
  return (
    <>
     <div className={styles.container}>
      <h1>Rooms List</h1>
      <div className={styles.roomsContainer}>
        {rooms.map((room) => (
          <div key={room.RoomID} className={styles.roomCard}>
            {/* Room Image */}
            <img src='https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D' alt={`Room ${room.RoomNumber}`} className={styles.image} />
            
            {/* Room Details */}
            <div className={styles.content}>
              <p><strong>Room ID:</strong> {room.RoomID}</p>
              <p><strong>Room Number:</strong> {room.RoomNumber}</p>
              <p><strong>Room Type:</strong> {room.RoomType}</p>
              <p><strong>Status:</strong> {room.Status}</p>
              <p><strong>Price:</strong> ₹{room.Price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Room