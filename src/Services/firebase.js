
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_-Pz5CC9mLYMcOcBsq2fg4T7Z_B6Fo_s",
  authDomain: "fir-2241e.firebaseapp.com",
  projectId: "fir-2241e",
  storageBucket: "fir-2241e.appspot.com",
  messagingSenderId: "503862568707",
  appId: "1:503862568707:web:42671242bf8abb39ffeb36",
  measurementId: "G-K58VQ2QPLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
 export const provider = new GoogleAuthProvider();