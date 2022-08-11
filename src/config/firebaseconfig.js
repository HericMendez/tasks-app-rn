// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzJCy3bBUXdhZ6_YOFF99myHyAarqlUIY",
  authDomain: "crud-app-bbb8f.firebaseapp.com",
  projectId: "crud-app-bbb8f",
  storageBucket: "crud-app-bbb8f.appspot.com",
  messagingSenderId: "383179880849",
  appId: "1:383179880849:web:c2716d9eef365521ab4230",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export default database;
