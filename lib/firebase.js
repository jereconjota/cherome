// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZBMIBgx6417gC7q2jKp9H471tmxRzPaY",
  authDomain: "cherome-dc699.firebaseapp.com",
  projectId: "cherome-dc699",
  storageBucket: "cherome-dc699.appspot.com",
  messagingSenderId: "267526541956",
  appId: "1:267526541956:web:4af9e2ff1ec0c0e1ea68d1",
  measurementId: "G-93ZBH1K1FW"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);