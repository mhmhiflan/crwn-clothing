import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDG2OKbSDNt9Bijhxb_Ibl4bJatSH5NXCs",
    authDomain: "crwn-db-dba2e.firebaseapp.com",
    databaseURL: "https://crwn-db-dba2e.firebaseio.com",
    projectId: "crwn-db-dba2e",
    storageBucket: "",
    messagingSenderId: "36199709745",
    appId: "1:36199709745:web:27bf54e62380c235a02910",
    measurementId: "G-JKNG2TYREH"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;