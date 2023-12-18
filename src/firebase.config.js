import { initializeApp } from "firebase/app";
import { getStore } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhczrRSExN2O_bM0Gq8qdish8QzRV1ySQ",
  authDomain: "image-storage-973de.firebaseapp.com",
  projectId: "image-storage-973de",
  storageBucket: "image-storage-973de.appspot.com",
  messagingSenderId: "537504618854",
  appId: "1:537504618854:web:7bc1665db5caa6e9b410a7",
  measurementId: "G-KJV16DWK64",
};

const app = initializeApp(firebaseConfig);
const imageStorage = getStore(app);
const urlStorage = getFirestore(app);
