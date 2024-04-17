// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj-SPtKFUfwYGzOyLqqTvPWPqBlz1bwNY",
  authDomain: "chatbot-manage.firebaseapp.com",
  projectId: "chatbot-manage",
  storageBucket: "chatbot-manage.appspot.com",
  messagingSenderId: "1073195309240",
  appId: "1:1073195309240:web:6f16f5460d2f0b029e3c4d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);