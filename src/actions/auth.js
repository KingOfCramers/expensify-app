import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider) // Access to authentication related technology...
      .then((user) => {
        console.log(user);
      })
  }
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
      .t
  };
};
/*
I'm a little confused by the use of our auth action generator. It currently looks like this:

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  }
};

And then is called inside our component. NOW, I've reconfigured it without the second return statement, like this: 

export const startLogin = () => {
  return () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  }
};


And it still works. How Redux play nice with the second version, which doesn't pass anything back? Is it because when it receives a blank function, it knows what to do because of "thunk"?  If so, could we then attach an additional action, like so?

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
      })
    .then(() => { ///do something else });
};*/