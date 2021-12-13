import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBPzFNcWCkN6G4MWbyag5ccA6cb58-rZlI",
  authDomain: "crwn-db-61cd7.firebaseapp.com",
  projectId: "crwn-db-61cd7",
  storageBucket: "crwn-db-61cd7.appspot.com",
  messagingSenderId: "784523895047",
  appId: "1:784523895047:web:1db0c950984948b16fe5a2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
