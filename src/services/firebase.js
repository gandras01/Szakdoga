// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7ddi3cqfREEpMn4vqdk2WqaI2G5XSyF0",
  authDomain: "szakdoga-a765d.firebaseapp.com",
  projectId: "szakdoga-a765d",
  storageBucket: "szakdoga-a765d.appspot.com",
  messagingSenderId: "931430373100",
  appId: "1:931430373100:web:3c5a67160f4a8944f837c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);