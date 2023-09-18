import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCq4cEQAD9S4aDB8EqG50vBr1BCNYI4SsE",
  authDomain: "ecom-store-db-9c5d9.firebaseapp.com",
  projectId: "ecom-store-db-9c5d9",
  storageBucket: "ecom-store-db-9c5d9.appspot.com",
  messagingSenderId: "282798152548",
  appId: "1:282798152548:web:2523be77530b93c7723871",
};

const FirebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);
};
