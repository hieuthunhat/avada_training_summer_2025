import { initializeApp } from "firebase/app";
import 'dotenv/config';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
  authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_MEASUREMENT_ID,
  measurementId: process.env.FIREBASE_API_KEY
};

const app = initializeApp(firebaseConfig);
export { app };