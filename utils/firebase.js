// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBZBMIBgx6417gC7q2jKp9H471tmxRzPaY",
  authDomain: "cherome-dc699.firebaseapp.com",
  projectId: "cherome-dc699",
  storageBucket: "cherome-dc699.appspot.com",
  messagingSenderId: "267526541956",
  appId: "1:267526541956:web:4af9e2ff1ec0c0e1ea68d1",
  measurementId: "G-93ZBH1K1FW"
};

let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// export const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore();

export const getStudents = () => getDocs(collection(db, "students"));

export const onGetStudents = (callback) => onSnapshot(collection(db, "students"), callback);

export const saveStudent = (user) => /** addDoc(collection(db, "students"), user); */ setDoc(doc(db, "students", user.email), user);

export const getStudent = (email) => getDoc(doc(db, "students", email));
