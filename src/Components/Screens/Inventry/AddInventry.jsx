import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddInventry = () => {

    const navigate = useNavigate();
    const [storeData, setStoreData] = useState();

    const [inventry, setInventry] = useState({
        name: '',
        quantity: '',
        price: ''
    });

    const handleSubmit = () => {
        console.log('Inventry Submitted:', inventry);
        axios.post('http://localhost:3000/Inventry', inventry)
            .then((res) => {
                setStoreData(res.data);
                navigate('/Dashboard/Inventry')
            })
    };

    return (
        <div className="form-container">
            <h2>Add New Inventry</h2>
            <div className="form-group">
                <label htmlFor="name">Inventry Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
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
                    onChange={(e) => {
                        setInventry({ ...inventry, price: e.target.value });
                    }}
                    required
                />
            </div>
            <button className="submit-btn"
                style={{ marginBottom: '3px', backgroundColor: 'red' }}
                onClick={() => { navigate("/Dashboard/Inventry") }}>
                Back</button>
            <button type="submit" onClick={handleSubmit} className="submit-btn">Add Inventry</button>

        </div>
    );
};

export default AddInventry;