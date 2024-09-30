// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1VF_kT-dSg2jRLBeV7tlJE966YUU0K1U",
  authDomain: "react-hook-form-a78ca.firebaseapp.com",
  projectId: "react-hook-form-a78ca",
  storageBucket: "react-hook-form-a78ca.appspot.com",
  messagingSenderId: "39868998813",
  appId: "1:39868998813:web:90a8ccb5fca8400aa32074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth