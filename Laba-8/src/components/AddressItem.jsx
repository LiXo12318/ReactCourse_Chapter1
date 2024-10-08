import React, { useState } from 'react';

function AddressItem({ address, onDelete, onSaveEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAddress, setEditedAddress] = useState(address);

  const handleSave = () => {
    if (editedAddress.firstName && editedAddress.lastName && editedAddress.phone) {
      onSaveEdit(address.id, editedAddress);
      setIsEditing(false);
    }
  };

  return (
    <li className="address-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedAddress.firstName}
            onChange={(e) => setEditedAddress({ ...editedAddress, firstName: e.target.value })}
          />
          <input
            type="text"
            value={editedAddress.lastName}
            onChange={(e) => setEditedAddress({ ...editedAddress, lastName: e.target.value })}
          />
          <input
            type="text"
            value={editedAddress.phone}
            onChange={(e) => setEditedAddress({ ...editedAddress, phone: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
         <span>ID: {address.id}</span>
          <span>{address.firstName}</span>
          <span>{address.lastName}</span>
          <span>{address.phone}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(address.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default AddressItem;
