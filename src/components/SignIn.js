import React from "react";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}
