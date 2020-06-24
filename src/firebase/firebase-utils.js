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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
