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
    if (import.meta.env.DEV) {
      console.log('SW registered: ', registration);
    }
  },
  onError: registrationError => {
    if (import.meta.env.DEV) {
      console.log('SW registration failed: ', registrationError);
    }
  }
});
