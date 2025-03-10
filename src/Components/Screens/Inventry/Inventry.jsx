import React, { useEffect, useState } from 'react'
import '../Room/Roomlist.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Inventry = () => {

  const navigate = useNavigate();
  const [storeData, setStoreData] = useState([]);

  const data = localStorage.getItem("UserData")
  const parseData = JSON.parse(data)
  const role = parseData.selValue;

  useEffect(() => {
    axios.get('http://localhost:3000/Inventry')
      .then((res) => {
        setStoreData(res.data);
        navigate('/Dashboard/Inventry')
      })
  }, [])

  const Deletebtn = (id)=>{
    const confirm = window.confirm("Are you sure you want to delete")
    if(confirm){
      axios.delete(`http://localhost:3000/Inventry/${id}`)
      location.reload()
    }
  }

// const updateinventry =(id)=>{
//   // axios.get(`http://localhost:3000/Inventry/${id}`)
//   // .then((res)=>{
//   //   console.log(res.data);   
//   // })
//   navigate(`/Dashboard/UpdateInventry/${id}`)
// }

  return (
    <>
      <div className="room-list">
        <div className='room-head'>
          <h1>Inventry</h1>
          {role === "Admin" ? <button onClick={() => { navigate("/Dashboard/AddInventry") }}>Add Inventry</button> : <button style={{ pointerEvents: 'none', opacity: '0.5' }} >Add Inventry</button>}
        </div>


        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{borderBottom:'1px solid gray', padding: '8px', backgroundColor: '#f2f2f2' }}>Name</th>
              <th style={{borderBottom:'1px solid gray', padding: '8px', backgroundColor: '#f2f2f2' }}>Quantity</th>
              <th style={{borderBottom:'1px solid gray', padding: '8px', backgroundColor: '#f2f2f2' }}>Price</th>
              <th style={{borderBottom:'1px solid gray', padding: '8px', backgroundColor: '#f2f2f2' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {storeData.map((e, i) => {
              return (
                <tr key={e.id}>
                  <td style={{borderBottom:'1px solid black', padding: '8px', textAlign: 'center' }}>{e.name}</td>
                  <td style={{borderBottom:'1px solid black', padding: '8px', textAlign: 'center' }}>{e.quantity}</td>
                  <td style={{borderBottom:'1px solid black', padding: '8px', textAlign: 'center' }}>{e.price}</td>
                  <td style={{borderBottom:'1px solid black', padding: '8px', textAlign: 'center' }}>
                    <button className="update-btn" onClick={()=>{
                      navigate(`/Dashboard/UpdateInventry/${e.id}`)
                    }}>Update</button>
                    <button className="delete-btn" onClick={()=>{Deletebtn(e.id)}}>Delete</button>
                  </td>

                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </>
  )
}
export default Inventry