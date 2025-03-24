// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLsiYDbzyD8Qr2rEzdPJuD7Jy7y50eK7Q",
    authDomain: "intervuai-b72ee.firebaseapp.com",
    projectId: "intervuai-b72ee",
    storageBucket: "intervuai-b72ee.firebasestorage.app",
    messagingSenderId: "443825173909",
    appId: "1:443825173909:web:649bca063333b02ec4b29c",
    measurementId: "G-Y0NH7ZLZJL"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);