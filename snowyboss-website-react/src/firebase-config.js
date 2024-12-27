// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnOmYkbdj4r6HWLf6aBe6fAR3OFoZczO4",
  authDomain: "snowybossblog.firebaseapp.com",
  projectId: "snowybossblog",
  storageBucket: "snowybossblog.appspot.com",
  messagingSenderId: "33167485991",
  appId: "1:33167485991:web:5fe9cc02cd654431bbf202",
  measurementId: "G-DQTZZYSEG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth  = getAuth(app);
export const provider = new GoogleAuthProvider();