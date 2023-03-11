
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "reactdashboard-970fd.firebaseapp.com",
  projectId: "reactdashboard-970fd",
  storageBucket: "reactdashboard-970fd.appspot.com",
  messagingSenderId: "5447370524",
  appId: "1:5447370524:web:13bf6125f5c974332e1cd9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
