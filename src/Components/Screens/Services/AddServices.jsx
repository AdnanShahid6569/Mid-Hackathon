import React, { useState } from 'react';
import './ServiceForm.css'; // Import the CSS file for styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ServiceForm = () => {
    const navigate = useNavigate();
  const [service, setService] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Service Submitted:', service);
    axios.post(' http://localhost:3000/services', service)
    .then((res)=>{
        console.log(res.data);
        navigate('/Dashboard/Service')
        
    })
  };

  return (
    <div className="form-container">
      <h2>Add New Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Service Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={service.name}
            onChange={(e) => {
              setService({ ...service, name: e.target.value });
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={service.description}
            onChange={(e) => {
              setService({ ...service, description: e.target.value });
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
            value={service.price}
            onChange={(e) => {
              setService({ ...service, price: e.target.value });
            }}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add Service</button>
      </form>
    </div>
  );
};

export default ServiceForm;