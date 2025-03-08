// import React, { useState } from "react";
// import "./RoomRegistration.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CreateRoom = () => {
// const navigate = useNavigate();
//     const [roomval,setRoomVal] = useState({
//         Roomid:0,
//         Roomnum:'',
//         Roomtype:'',
//         Roomstatus:'',
//         Roomprice:0,
//         Roomimg:'',

//     })
//   const handleRegister = () => {
//     axios
//     .post("http://localhost:3000/rooms", roomval)
//     .then((res) => {
//       console.log("API Response:", res.data);
//       alert("Room Registered Successfully!");
//     })
//     .catch((err) => {
//       console.error("API Error:", err);
//       alert("Failed to Register Room!");
//     });
// console.log(`Values ${roomval}`);
//   };

//   return (
//     <div className="registration-container">
     
//       <div className="input-container">
//         <div className="form-group">
//           <label>Room ID:</label>
//           <input type="number" onChange={(e)=>{setRoomVal({...roomval ,Roomid:e.target.value})}} />
//         </div>
//         <div className="form-group">
//           <label>Room Number:</label>
//           <input type="text" onChange={(e)=>{setRoomVal({...roomval ,Roomnum:e.target.value})}}  />
//         </div>
//         <div className="form-group">
//           <label>Room Type:</label>
//           <input type="text" onChange={(e)=>{setRoomVal({...roomval ,Roomtype:e.target.value})}} />
//         </div>
//         <div className="form-group">
//           <label>Status:</label>
//           <input type="text"  onChange={(e)=>{setRoomVal({...roomval ,Roomstatus:e.target.value})}}/>
//         </div>
//         <div className="form-group">
//           <label>Price:</label>
//           <input type="number"  onChange={(e)=>{setRoomVal({...roomval ,Roomprice:e.target.value})}} />
//         </div>
//         <div className="form-group">
//           <label>Image URL:</label>
//           <input type="text"onChange={(e)=>{setRoomVal({...roomval ,Roomimg:e.target.value})}} />
//         </div>
//         <div className="form-group">
//           <button type="button" onClick={handleRegister}>
//             Register Room
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateRoom;

import React, { useState } from "react";
import "./RoomRegistration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateRoom = () => {
  const navigate = useNavigate();

  const [roomval, setRoomVal] = useState({
    Roomid: 0,
    Roomnum: "",
    Roomtype: "",
    Roomstatus: "",
    Roomprice: 0,
    Roomimg: "",
  });

  const handleRegister = () => {
    console.log("Request Payload:", roomval);

    axios.post("http://localhost:3000/rooms",roomval)
    .then((res)=>{
      console.log("user create successfully..");
        //   navigate("/");
      
    }).catch((err)=>{
      console.log(err);
      
    })

    
  };

  return (
    <div className="registration-container">
      <div className="input-container">
        <div className="form-group">
          <label>Room ID:</label>
          <input
            type="number"
        
            onChange={(e) => {
              setRoomVal({ ...roomval, Roomid: parseInt(e.target.value) });
            }}
          />
        </div>
        <div className="form-group">
          <label>Room Number:</label>
          <input
            type="text"
            onChange={(e) => {
              setRoomVal({ ...roomval, Roomnum: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label>Room Type:</label>
          <input
            type="text"
            onChange={(e) => {
              setRoomVal({ ...roomval, Roomtype: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <input
            type="text"
            onChange={(e) => {
              setRoomVal({ ...roomval, Roomstatus: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            onChange={(e) => {
              setRoomVal({ ...roomval, Roomprice: parseInt(e.target.value) });
            }}
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            onChange={(e) => {
              setRoomVal({ ...roomval, Roomimg: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <button type="button" onClick={handleRegister}>
            Register Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;