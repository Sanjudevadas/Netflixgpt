// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqZcjZjfVU7d-oknshDuhQ80g2i5GiwFc",
  authDomain: "netflixgpt-eeb05.firebaseapp.com",
  projectId: "netflixgpt-eeb05",
  storageBucket: "netflixgpt-eeb05.firebasestorage.app",
  messagingSenderId: "1033311429644",
  appId: "1:1033311429644:web:69fe47c6c515f2c4cdfa29",
  measurementId: "G-W4P365WG6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();