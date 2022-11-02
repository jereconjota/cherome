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


// export const app = initializeApp(firebaseConfig);
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// auth and firestore
export const auth = getAuth(app);
export const db = getFirestore();

//////////////////////////////
// students collection crud//
////////////////////////////
export const getStudents = () => getDocs(collection(db, "students"));
export const onGetStudents = (callback) => onSnapshot(collection(db, "students"), callback);

export const saveStudent = (user) =>  /** addDoc(collection(db, "students", user.email), user); 
                                          doc(db, "students", user.uid).set(user); */  
                                      setDoc(doc(db, "students", user.uid), user); 
export const updateStudent = (id, user) => updateDoc(doc(db, "students", id), user);
export const getStudent = (id) => {
  console.log('getStudent', id);
  return getDoc(doc(db, "students", id));
}


//////////////////////////
// users collection crud
////////////////////////

export const saveUser = (user) => setDoc(doc(db, "users", user.uid), user);