// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs-HIdwvQjGpNEFkM33x2nm_TP6at531A",
  authDomain: "job-portal-demo-e34d6.firebaseapp.com",
  projectId: "job-portal-demo-e34d6",
  storageBucket: "job-portal-demo-e34d6.appspot.com",
  messagingSenderId: "1009098813147",
  appId: "1:1009098813147:web:e26116cedd223b8a0466fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;