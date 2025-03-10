import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateInventry = () => {
    const {id} = useParams();
    console.log(id);
    
    
    const navigate = useNavigate();
    const [storeData,setStoreData] = useState([]);
  const [inventry, setInventry] = useState({
    name: '',
    quantity: '',
    price: ''
  });

useEffect(()=>{

    axios.get(`http://localhost:3000/Inventry/${id}`)
    .then((res)=>{
        setStoreData(res.data);                
    })
},[])

const handleSubmit =()=>{
    axios.put(`http://localhost:3000/Inventry/${id}`,inventry)
    navigate('/Dashboard/Inventry')

    // alert('ok')
}
  return (
    <div className="form-container">
      <h2>Update Inventry</h2>
        <div className="form-group">
          <label htmlFor="name">Inventry Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            // value={storeData.name}
            onChange={(e) => {
                setInventry({ ...inventry, name: e.target.value });
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            // value={storeData.quantity}
            onChange={(e) => {
                setInventry({ ...inventry, quantity: e.target.value });
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            // value={storeData.price}
            onChange={(e) => {
                setInventry({ ...inventry, price: e.target.value });
            }}
            required
          />
        </div>
        <button className="submit-btn" 
        style={{marginBottom:'3px',backgroundColor:'red'}}
        onClick={()=>{navigate("/Dashboard/Inventry")}}>
            Back</button>
        <button type="submit" onClick={handleSubmit} className="submit-btn">Add Inventry</button>
    </div>
  );
};

export default UpdateInventry;