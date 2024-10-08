import React from 'react';

function Loader({ isLoading, children }) {
  return (
    <div className="loader-container">
      {isLoading ? (
        <div className="loader">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default Loader;
