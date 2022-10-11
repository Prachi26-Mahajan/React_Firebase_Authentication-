// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBCky0R2nWIDpI4AwIW2N2AFdbQqm3Qfnk",
  authDomain: "react-authentication-5b27d.firebaseapp.com",
  projectId: "react-authentication-5b27d",
  storageBucket: "react-authentication-5b27d.appspot.com",
  messagingSenderId: "997563099258",
  appId: "1:997563099258:web:8a8134b7a43a6093c773c3",
  measurementId: "G-YGM93L6BSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;