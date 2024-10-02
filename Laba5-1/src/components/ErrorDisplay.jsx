import React from 'react';

const ErrorDisplay = ({ error }) => {
  return (
    <div className="error-message">
      Error: {error.message}
    </div>
  );
};

export default ErrorDisplay;
