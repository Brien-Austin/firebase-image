// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhczrRSExN2O_bM0Gq8qdish8QzRV1ySQ",
  authDomain: "image-storage-973de.firebaseapp.com",
  projectId: "image-storage-973de",
  storageBucket: "image-storage-973de.appspot.com",
  messagingSenderId: "537504618854",
  appId: "1:537504618854:web:7bc1665db5caa6e9b410a7",
  measurementId: "G-KJV16DWK64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
