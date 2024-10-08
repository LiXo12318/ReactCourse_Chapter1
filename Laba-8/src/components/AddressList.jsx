import React, { useState } from 'react';
import AddressItem from './AddressItem.jsx';

function AddressList({ addresses, setData }) {
  const handleDelete = (id) => {
    setData(prevAddresses => prevAddresses.filter(item => item.id !== id));
  };

  const handleSaveEdit = (id, updatedAddress) => {
    setData(prevAddresses =>
      prevAddresses.map(item =>
        item.id === id ? updatedAddress : item
      )
    );
  };

  return (
    <ul className="address-list">
      {addresses.length === 0 ? (
        <div>No data to display</div>
      ) : (
        addresses.map((address) => (
          <AddressItem
            key={address.id}
            address={address}
            onDelete={handleDelete}
            onSaveEdit={handleSaveEdit}
          />
        ))
      )}
    </ul>
  );
}

export default AddressList;
