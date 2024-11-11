import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [terms, setTerms] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      email,
      name,
      address,
      address2,
      city,
      province,
      postalCode,
      terms,
    });
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1>Data Entry Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
            <div className="input-box">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-box full-width">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="1234 Main St"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-box full-width">
              <label htmlFor="address2">Address 2</label>
              <input
                type="text"
                id="address2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                placeholder="Apartment, studio, or floor"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-box">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="province">Province</label>
              <select
                id="province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}>
                  <option value="Alberta">Alberta</option>
                  <option value="British Columbia">British Columbia</option>
                  <option value="Manitoba">Manitoba</option>
                  <option value="New Brunswick">New Brunswick</option>
                  <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                  <option value="Northwest Territories">Northwest Territories</option>
                  <option value="Nova Scotia">Nova Scotia</option>
                  <option value="Nunavut">Nunavut</option>
                  <option value="Ontario">Ontario</option>
                  <option value="Prince Edward Island">Prince Edward Island</option>
                  <option value="Quebec">Quebec</option>
                  <option value="Saskatchewan">Saskatchewan</option>
                  <option value="Yukon">Yukon</option>
              </select>
            </div>
            <div className="input-box">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="terms"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <label htmlFor="terms">Agree to terms and services</label>
          </div>
          <div className="submit-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      {submittedData && (
        <div className="submitted-data">
          <ul>
            <li><strong>Email:</strong> {submittedData.email}</li>
            <li><strong>Full Name:</strong> {submittedData.name}</li>
            <li><strong>Address:</strong> {submittedData.address}</li>
            <li><strong>Address 2:</strong> {submittedData.address2}</li>
            <li><strong>City:</strong> {submittedData.city}</li>
            <li><strong>Province:</strong> {submittedData.province}</li>
            <li><strong>Postal Code:</strong> {submittedData.postalCode}</li>
            <li><strong>Agreed to Terms:</strong> {submittedData.terms ? "Yes" : "No"}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
