// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTcXwQck1juFbN6cJCz-pvo5kAWVaaPXA",
  authDomain: "privaterouter-intigration.firebaseapp.com",
  projectId: "privaterouter-intigration",
  storageBucket: "privaterouter-intigration.appspot.com",
  messagingSenderId: "437437468745",
  appId: "1:437437468745:web:2edc1b162e1d77c5baaf98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth