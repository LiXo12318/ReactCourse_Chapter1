import React from 'react';

function ErrorDisplay({ error }) {
  return (
    <div className="error-display">
      <p>Error: {error.message}</p>
    </div>
  );
}

export default ErrorDisplay;
