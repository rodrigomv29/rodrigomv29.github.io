import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>Hello, React with JavaScript and Webpack!</h1>
      <p>This is a minimal React page.</p>
    </div>
  );
};

// Render the App component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
