import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider); // Access to authentication related technology...
  }
};