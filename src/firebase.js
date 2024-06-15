// Import the functions you need from the SDKs you need
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnJ6ewgiKZvrqjM57z4k9E1IZhcS6S98E",
  authDomain: "chatapp-36598.firebaseapp.com",
  projectId: "chatapp-36598",
  storageBucket: "chatapp-36598.appspot.com",
  messagingSenderId: "518382900164",
  appId: "1:518382900164:web:6314b4585ef4f6a17e0a91",
  measurementId: "G-LL5CSQ01CF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };