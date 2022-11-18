// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf8LS2_iRxzfEUK5a53IeEQiGIPh7eH4Q",
  authDomain: "e-commerce-practice-aa0c7.firebaseapp.com",
  projectId: "e-commerce-practice-aa0c7",
  storageBucket: "e-commerce-practice-aa0c7.appspot.com",
  messagingSenderId: "961159557501",
  appId: "1:961159557501:web:20bf2ffcf995cac1175c14",
  measurementId: "G-SJJD6CB9QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {auth,db};
