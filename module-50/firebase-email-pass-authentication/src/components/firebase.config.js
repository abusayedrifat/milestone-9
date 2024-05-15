// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYQ6crqL1C_Cyn41D23gXOG_rH4q4GWME",
  authDomain: "fir-email-pass-auth-b52f8.firebaseapp.com",
  projectId: "fir-email-pass-auth-b52f8",
  storageBucket: "fir-email-pass-auth-b52f8.appspot.com",
  messagingSenderId: "373003827182",
  appId: "1:373003827182:web:f9158318581db6003100ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth