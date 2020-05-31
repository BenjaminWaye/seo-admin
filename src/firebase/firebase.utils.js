import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA24EvO-UdqNkKmG1AKVi-gqepZfBDkfKQ",
  authDomain: "polarforged-f3230.firebaseapp.com",
  databaseURL: "https://polarforged-f3230.firebaseio.com",
  projectId: "polarforged-f3230",
  storageBucket: "polarforged-f3230.appspot.com",
  messagingSenderId: "229126507356",
  appId: "1:229126507356:web:b48098de8986b498388f99",
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
