import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAV06WA4mjI3sfw2pI4U6dr6aihB77w8Cc",
  authDomain: "portfolio-1d212.firebaseapp.com",
  projectId: "portfolio-1d212",
  storageBucket: "portfolio-1d212.appspot.com",
  messagingSenderId: "599887311944",
  appId: "1:599887311944:web:6c98537f2c9d1fc5c3147d",
  measurementId: "G-SR2QVZEN7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

export { db, doc, getDoc, setDoc };