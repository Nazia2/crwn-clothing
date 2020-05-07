import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBf5WDdefJkOSsCVXsIAA2fNdjca974YwI",
  authDomain: "crwn-clothing-d66b9.firebaseapp.com",
  databaseURL: "https://crwn-clothing-d66b9.firebaseio.com",
  projectId: "crwn-clothing-d66b9",
  storageBucket: "crwn-clothing-d66b9.appspot.com",
  messagingSenderId: "300495645950",
  appId: "1:300495645950:web:5788d50caba080248c49af",
  measurementId: "G-826LFWM7FL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
