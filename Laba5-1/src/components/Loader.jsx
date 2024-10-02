import React from 'react';

const Loader = ({ isLoading, children }) => {
  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <div className="loader-overlay">
            <div className="loader"></div>
          </div>
        </div>
      )}
      {children}
    </>
  );
};

export default Loader;
