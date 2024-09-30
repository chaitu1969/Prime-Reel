// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5j79s3YSyB0h0QHegG-mTaBqEp5WKoHI",
  authDomain: "primereel-743c7.firebaseapp.com",
  projectId: "primereel-743c7",
  storageBucket: "primereel-743c7.appspot.com",
  messagingSenderId: "928919442549",
  appId: "1:928919442549:web:fcf6c73dab0fd6d371143c",
  measurementId: "G-1M0Q07R6ML",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth();
