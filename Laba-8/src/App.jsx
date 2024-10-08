import React from 'react';
import './App.css';
import AddressList from './components/AddressList.jsx';
import AddressForm from './components/AddressForm.jsx';
import useAddressBook from './hooks/useAddressBook.js';
import Loader from './components/Loader.jsx';
import ErrorDisplay from './components/ErrorDisplay.jsx';

function App() {
  const { isLoading, data: addresses, setData, error } = useAddressBook();

  const handleAddAddress = (address) => {
    setData(prevAddresses => [...prevAddresses, { ...address, id: Date.now() }]);
  };

  return (
    <div className="app-container">
      <h1>Address Book</h1>
      <Loader isLoading={isLoading}>
        {error && <ErrorDisplay error={error} />}
        <AddressForm onAdd={handleAddAddress} />
        <AddressList addresses={addresses} setData={setData} />
      </Loader>
    </div>
  );
}

export default App;
