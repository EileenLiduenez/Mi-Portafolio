import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0ghMTeIS1NLz8ylvWVFKv9TZVIKCziX0",
  authDomain: "eileen-portfolio.firebaseapp.com",
  projectId: "eileen-portfolio",
  storageBucket: "eileen-portfolio.firebasestorage.app",
  messagingSenderId: "221855238638",
  appId: "1:221855238638:web:e84a1a8e845eb3542b66ff"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs};