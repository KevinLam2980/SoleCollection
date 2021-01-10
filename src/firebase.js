  import firebase from 'firebase'
  require("firebase/firestore")
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDsYSHnXGyDlqCqtXkrdSrL_eQfgiREPDc",
    authDomain: "sole-collection.firebaseapp.com",
    projectId: "sole-collection",
    storageBucket: "sole-collection.appspot.com",
    messagingSenderId: "421797128138",
    appId: "1:421797128138:web:f1c2b858bacddb82c61133",
    measurementId: "G-X00BKB2X5G"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const db = firebase.firestore();