import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyCCeNgTfRP8k-L2S17eMo6B3AE_euhoyYw",
  authDomain: "crown-db-ed8d7.firebaseapp.com",
  databaseURL: "https://crown-db-ed8d7.firebaseio.com",
  projectId: "crown-db-ed8d7",
  storageBucket: "crown-db-ed8d7.appspot.com",
  messagingSenderId: "391781102203",
  appId: "1:391781102203:web:faa6546974d351c38de8de",
  measurementId: "G-BVMLK7X653",
};

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
      console.error("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
