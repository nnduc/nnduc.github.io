// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1kHTcsWpzC_-cLiQJchC8Bi4Naqlhjgk",
  authDomain: "duc-ninja-website.firebaseapp.com",
  projectId: "duc-ninja-website",
  storageBucket: "duc-ninja-website.firebasestorage.app",
  messagingSenderId: "300910701848",
  appId: "1:300910701848:web:8fc70f02b878d223ab026d",
  measurementId: "G-XWTPXSL56G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
