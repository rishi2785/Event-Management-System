import React from 'react';  
import { createRoot } from 'react-dom/client'; // Import createRoot for React 18+  
import './index.css';  
import App from './App';  
import reportWebVitals from './reportWebVitals';  
import { AuthProvider } from "./context/AuthContext";  

const rootElement = document.getElementById("root");  

if (rootElement) {  
    const root = createRoot(rootElement); // Create the root  
    root.render(  
      <AuthProvider>  
        <App />  
      </AuthProvider>  
    );  
} else {  
    console.error("Root element not found");  
}  

reportWebVitals();