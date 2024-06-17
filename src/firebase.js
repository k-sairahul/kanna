// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDAbs2zGGCrRAfJxFNXa927FeS63zVDgdE",
    authDomain: "e-learning-881de.firebaseapp.com",
    projectId: "e-learning-881de",
    storageBucket: "e-learning-881de.appspot.com",
    messagingSenderId: "23214435555",
    appId: "1:23214435555:web:e266c92ce076a43d9429d6",
    measurementId: "G-W46XT0JCD2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const firestore = getFirestore(app);

// Hardcoded admin emails for simplicity
const adminEmails = ["admin@example.com"];

export { auth, firestore, adminEmails };
