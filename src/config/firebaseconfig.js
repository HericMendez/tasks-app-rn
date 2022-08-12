import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzJCy3bBUXdhZ6_YOFF99myHyAarqlUIY",
  authDomain: "crud-app-bbb8f.firebaseapp.com",
  projectId: "crud-app-bbb8f",
  storageBucket: "crud-app-bbb8f.appspot.com",
  messagingSenderId: "383179880849",
  appId: "1:383179880849:web:c2716d9eef365521ab4230",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;
