import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDSub662thkg81pIrNAqC8bi-Fb_eJiS0I",
    authDomain: "chat-app-faeeb.firebaseapp.com",
    databaseURL: "https://chat-app-faeeb-default-rtdb.firebaseio.com",
    projectId: "chat-app-faeeb",
    storageBucket: "chat-app-faeeb.appspot.com",
    messagingSenderId: "993919542093",
    appId: "1:993919542093:web:fbb6846ba959bce1cfcd04",
    measurementId: "G-ETD1F9KN1B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  // exports
  export const auth = firebase.auth;
  export const db = firebase.database();