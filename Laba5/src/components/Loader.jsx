import React from 'react';

const Loader = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div style={styles.container}>
        <div style={styles.spinner}></div>
        <p>Завантаження...</p>
      </div>
    );
  }
//vhvbvb
  return children;
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '6px solid #f3f3f3',
    borderTop: '6px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};

export default Loader;
