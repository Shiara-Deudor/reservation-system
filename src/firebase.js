// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs5X0AprBHUO2ZLRbuUOXFhnWi0-3U4g4",
  authDomain: "reservation-system-4587b.firebaseapp.com",
  projectId: "reservation-system-4587b",
  storageBucket: "reservation-system-4587b.appspot.com",
  messagingSenderId: "248085153045",
  appId: "1:248085153045:web:6f40a7625d686a7c3d951c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);