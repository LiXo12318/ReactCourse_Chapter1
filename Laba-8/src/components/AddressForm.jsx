import React, { useState } from 'react';

function AddressForm({ onAdd }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'The first name is required';
    if (!lastName) newErrors.lastName = 'The last name is required';
    if (!phone) newErrors.phone = 'The phone number is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      onAdd({ firstName, lastName, phone });
      setFirstName('');
      setLastName('');
      setPhone('');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="address-form">
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        className={`input-field ${errors.firstName ? 'input-error' : ''}`}
      />
      {errors.firstName && <div className="error-message">{errors.firstName}</div>}

      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        className={`input-field ${errors.lastName ? 'input-error' : ''}`}
      />
      {errors.lastName && <div className="error-message">{errors.lastName}</div>}

      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        className={`input-field ${errors.phone ? 'input-error' : ''}`}
      />
      {errors.phone && <div className="error-message">{errors.phone}</div>}

      <button type="submit" className="add-btn">Add Address</button>
    </form>
  );
}

export default AddressForm;
