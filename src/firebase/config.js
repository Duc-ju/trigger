import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDALfLC5EjiColNCyNlgs8gUyVfpkv34zQ",
    authDomain: "trigger-3c9cf.firebaseapp.com",
    projectId: "trigger-3c9cf",
    storageBucket: "trigger-3c9cf.appspot.com",
    messagingSenderId: "311424349748",
    appId: "1:311424349748:web:4010c937b778b0448dbc61",
    measurementId: "G-MYQS51ZNM5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const db = firebase.firestore()

  export {db, auth}
  export default firebase;