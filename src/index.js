import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app"; // Import fungsi Firebase
import firebaseConfig from "./firebaseConfig"; // Import konfigurasi Firebase

// Inisialisasi Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Untuk mengukur performa aplikasi (opsional)
reportWebVitals();
