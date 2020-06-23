import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";
// import 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyCa-8H7jJ_PnBH6Oq5t30uiK4kcvPjUFU8",
  authDomain: "nit-4d601.firebaseapp.com",
  databaseURL: "https://nit-4d601.firebaseio.com",
  projectId: "nit-4d601",
  storageBucket: "nit-4d601.appspot.com",
  messagingSenderId: "873900214094",
  appId: "1:873900214094:web:77156bf2aa6580e0c1001f",
  measurementId: "G-EDMBFJTZ6P",
};
// firebase.analytics();

export default firebase.initializeApp(firebaseConfig);
