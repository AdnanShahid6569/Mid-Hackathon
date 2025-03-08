import React, { useState } from 'react';
import './PaymentForm.css'; 

const PaymentForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash'); 
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount || !paymentMethod) {
      setError('Please fill in all fields.');
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      setError('Invalid amount. Please enter a valid number.');
      return;
    }

    setError('');
    alert(`Payment submit for ${name} Amount PKR ${amount}`);
  };

  return (
    <div className="payment-form-container">
      <h2>Payment Details</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div className="form-group">
          <label>Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="cash">Cash</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;