import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker
serviceWorkerRegistration.register({
  onUpdate: registration => {
    if (process.env.NODE_ENV === 'development') {
      console.log('SW registered: ', registration);
    }
  },
  onError: registrationError => {
    if (process.env.NODE_ENV === 'development') {
      console.log('SW registration failed: ', registrationError);
    }
  }
});
