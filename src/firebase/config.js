// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmFFyiP4QliECE4EfIVCN5ctE7QEkA4UM",
  authDomain: "joyeriaac-6be80.firebaseapp.com",
  projectId: "joyeriaac-6be80",
  storageBucket: "joyeriaac-6be80.appspot.com",
  messagingSenderId: "193182509379",
  appId: "1:193182509379:web:0dbfd9972a23ec0da767f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);