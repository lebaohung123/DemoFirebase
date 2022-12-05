import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAcNXLHq8Vs4TFxlmSKxsufH7dInz5ytOQ",
  authDomain: "vd1firebase.firebaseapp.com",
  databaseURL: "https://vd1firebase-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vd1firebase",
  storageBucket: "vd1firebase.appspot.com",
  messagingSenderId: "829889521855",
  appId: "1:829889521855:web:11ebd584e245f77b273e0a",
  measurementId: "G-P592S1QCBV"
};
const connect = initializeApp(firebaseConfig);
const db = getDatabase(connect);
const database= ref(db, 'note/');
export const dataNote = database;