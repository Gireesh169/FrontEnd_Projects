// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMPmHdgHR5jAAjXe789LuMK0beGW1JSD4",
  authDomain: "webapp-7b191.firebaseapp.com",
  projectId: "webapp-7b191",
  storageBucket: "webapp-7b191.firebasestorage.app",
  messagingSenderId: "927864175716",
  appId: "1:927864175716:web:3046e16ea2733208dd7371",
  measurementId: "G-Z71ZGKG4M9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore DB
export const db = getFirestore(app);
