import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA0CS9CmNCPgKJJM0JVxPcUFCtUHY_jSe4",
  authDomain: "flex-social-assessment.firebaseapp.com",
  projectId: "flex-social-assessment",
  storageBucket: "flex-social-assessment.appspot.com",
  messagingSenderId: "130029656238",
  appId: "1:130029656238:web:572d1a1166817bf44c753f",
  measurementId: "G-KL2PD0SM5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };