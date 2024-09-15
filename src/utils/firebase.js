// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8dBwNROrNW_kKgIbvPg_lyY5pyOh5tt4",
  authDomain: "netflix-768ce.firebaseapp.com",
  projectId: "netflix-768ce",
  storageBucket: "netflix-768ce.appspot.com",
  messagingSenderId: "655503734921",
  appId: "1:655503734921:web:26777f0ba80fe28d91ae58",
  measurementId: "G-SXGV3WL8X4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
