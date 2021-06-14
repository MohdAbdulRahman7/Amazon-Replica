import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHKKNBZa_uxf9gGx-BB0CvWYSCJLpkJbk",
    authDomain: "clone-8e636.firebaseapp.com",
    projectId: "clone-8e636",
    storageBucket: "clone-8e636.appspot.com",
    messagingSenderId: "499928914485",
    appId: "1:499928914485:web:335224efceebc04355ef7c",
    measurementId: "G-08VKVWC7F6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };