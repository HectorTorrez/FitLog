// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-0BeqkK3bW4x1OWGlUwGP-slV5ZRnvw0",
  authDomain: "fitlog-2ef49.firebaseapp.com",
  projectId: "fitlog-2ef49",
  storageBucket: "fitlog-2ef49.appspot.com",
  messagingSenderId: "1078234015061",
  appId: "1:1078234015061:web:84570f602c8da2982f7bdc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);