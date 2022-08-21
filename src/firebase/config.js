import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeiWcw5dXauyO0RtHPoiTFUzdl3Ii2x00",
  authDomain: "chat-app-8ebf4.firebaseapp.com",
  projectId: "chat-app-8ebf4",
  storageBucket: "chat-app-8ebf4.appspot.com",
  messagingSenderId: "543303493393",
  appId: "1:543303493393:web:96a6b5d46451895f194eb0",
  measurementId: "G-XP4SZ4MHYD",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
export { db, auth };
export default firebase;
