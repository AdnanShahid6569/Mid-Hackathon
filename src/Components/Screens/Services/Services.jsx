import React, { useEffect, useState } from 'react'
import '../Room/Roomlist.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Services = () => {
  const navigate = useNavigate();
  
  const data = localStorage.getItem("UserData")
  const parseData = JSON.parse(data)
  // console.log(parseData);
  const role = parseData.selValue;

  const [myservice,setMyservice] = useState([]);
  // const [refresh,setRefresh] = useState(false);
  useEffect(()=>{
    axios.get("http://localhost:3000/services")
    .then((res)=>{
      setMyservice(res.data);
      
    })
  },[])

  const handleDelete=(id)=>{
    const confirm = window.confirm("Are You Sure Delete Services")
    if(confirm){
      axios.delete(`http://localhost:3000/services/${id}`)
      location.reload()
      // setRefresh(true)
    }
   
  }
  return (
    <>
     <div className="room-list">
      <div className='room-head'>
        <h1>Services</h1>
      {role === "Admin" ? <button onClick={()=>{navigate("/Dashboard/AddService")}}>Add Services</button> : <button style={{pointerEvents:'none',opacity:'0.5'}} >Add Services</button>}
      </div>

    {/* <div className="rooms-container">
      <div className="room-card" >
<div className="room-details" style={{backgroundColor:'white'}}> */}
<div className="room-details" style={{display:'flex',gap:'30px',flexWrap:'wrap'}}>
      {myservice.map((e,i)=>{
        return <div className="room-details" style={{backgroundColor:'white',boxShadow:' 4px 4px 4px black ,-4px -4px 4px black',width:"25%"}}>
          <h4>{e.id}</h4>
          <h2>{e.name}</h2>
          <p>{e.description}</p>
          <p>{e.price}</p>
          {role === "Admin" ? <button
              className="delete-btn"
              onClick={() => handleDelete(e.id)}
            >
              Delete
            </button> : <button className="delete-btn" style={{pointerEvents:'none',opacity:'0.5'}}>Delete</button>}
        </div>
      })}
</div>
</div>
      {/* </div> */}
    {/* // </div> */}
    {/* //   </div> */}
    </>
  )
}

export default Services