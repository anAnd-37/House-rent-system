// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApFIgZKBunzV3h4wi4ZzwVgVba0flE4PA",
  authDomain: "house-market-5ab73.firebaseapp.com",
  projectId: "house-market-5ab73",
  storageBucket: "house-market-5ab73.appspot.com",
  messagingSenderId: "660635096847",
  appId: "1:660635096847:web:88a9d492eb4095d8eb107a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();