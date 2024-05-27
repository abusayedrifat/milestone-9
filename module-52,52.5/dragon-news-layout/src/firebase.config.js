// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH9oo4W3t9M95b5Yb76F7tGLaEPf2mB1w",
  authDomain: "dragon-news-layout-fbb5f.firebaseapp.com",
  projectId: "dragon-news-layout-fbb5f",
  storageBucket: "dragon-news-layout-fbb5f.appspot.com",
  messagingSenderId: "999360894136",
  appId: "1:999360894136:web:c6af854a8a59dc81a8904d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth