import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider) // Access to authentication related technology...
  }
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  };
};

export const login = (uid) => ({
  type: "LOGIN",
  uid
});

export const logout = () => ({
  type: "LOGOUT"
});