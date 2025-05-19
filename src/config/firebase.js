// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzy2spwLeLxQgBhJJBf3Ol6JIYB5dmLbg",
  authDomain: "o1-a-visa-requirments.firebaseapp.com",
  projectId: "o1-a-visa-requirments",
  storageBucket: "o1-a-visa-requirments.firebasestorage.app",
  messagingSenderId: "240260434282",
  appId: "1:240260434282:web:9ba794f21e6f8b8a583d13",
  measurementId: "G-MNR9VQ46DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);