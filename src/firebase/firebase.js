import * as firebase from 'firebase'; // * as takes all named exports and puts them as methods on a new variable, called firebase

const config = {
   apiKey: "AIzaSyCAABHsOroNLGFM1HUMp9RTCYn7puQBarE",
   authDomain: "expenses-js-app.firebaseapp.com",
   databaseURL: "https://expenses-js-app.firebaseio.com",
   projectId: "expenses-js-app",
   storageBucket: "expenses-js-app.appspot.com",
   messagingSenderId: "960366919977"};

firebase.initializeApp(config); // Connect to firebase.
const database = firebase.database();

export { firebase, database as default };