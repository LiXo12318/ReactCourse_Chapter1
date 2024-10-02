import React from 'react';

const Loader = ({ isLoading, children }) => {
  return (
    <div className="loader-container">
      {isLoading && (
        <>
          <div className="loader"></div>
          <div className="loading-text">Loading...</div>
        </>
      )}
      {!isLoading && children}
    </div>
  );
};

export default Loader;
