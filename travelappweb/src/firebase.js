// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGa0JY-Zg-OK_jqcj9fb7iP7Jiu_EU67I",
  authDomain: "hanoi-tourism.firebaseapp.com",
  databaseURL: "https://hanoi-tourism-default-rtdb.firebaseio.com",
  projectId: "hanoi-tourism",
  storageBucket: "hanoi-tourism.appspot.com",
  messagingSenderId: "1030330629926",
  appId: "1:1030330629926:web:3c2652fc75c7576c404be7",
  measurementId: "G-Y3D90LV2G2"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_ANALYSIS = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
