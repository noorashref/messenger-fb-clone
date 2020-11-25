import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDtNGvcEIk_WznupwV5f5nYfxi2Mv0T6D8",
  authDomain: "facebook-messenger-18949.firebaseapp.com",
  databaseURL: "https://facebook-messenger-18949.firebaseio.com",
  projectId: "facebook-messenger-18949",
  storageBucket: "facebook-messenger-18949.appspot.com",
  messagingSenderId: "320938560557",
  appId: "1:320938560557:web:e4038f06e39cb073953ca4",
  measurementId: "G-1GSRLYS08C",
});
const db = firebaseApp.firestore();
export default db;
