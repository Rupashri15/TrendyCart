import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBHkTlpsztAl-YvgbKqqWEc-GbWxhhui8g",
  authDomain: "trendycart-c58f3.firebaseapp.com",
  projectId: "trendycart-c58f3",
  storageBucket: "trendycart-c58f3.appspot.com",
  messagingSenderId: "859258061036",
  appId: "1:859258061036:web:8e51f87322136c1be1e5c9",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;