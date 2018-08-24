import * as firebase from 'firebase'; // * as takes all named exports and puts them as methods on a new variable, called firebase

const config = {
   apiKey: "AIzaSyCAABHsOroNLGFM1HUMp9RTCYn7puQBarE",
   authDomain: "expenses-js-app.firebaseapp.com",
   databaseURL: "https://expenses-js-app.firebaseio.com",
   projectId: "expenses-js-app",
   storageBucket: "expenses-js-app.appspot.com",
   messagingSenderId: "960366919977"
};

firebase.initializeApp(config); // Connect to firebase.
const database = firebase.database();

database.ref().set({
  age: 21,
  location: {
    city: "Boston",
    country: "United States",
    weather: {
      temperature: "20",
      rain: false
    }
  }
});

// SETTING DATA
  database.ref("age").set(29) // Set can take any datatype (and will wipe previous value)...
  database.ref("location/city").set("New York"); // Use slashes to get subproperties.
  database.ref("location/weather/temperature").set("40") // Can go deeper too...
  database.ref("location/city").set("London")
    .then(() => { // Firebase returns promises.
      console.log("City was changed.");
    })
    .catch((e) => {
      console.log("This failed", e);
    });

// DELETING DATA
  database.ref("location/city").remove()
    .then(() => { // Firebase returns promises.
      console.log("City was removed.");
    })
    .catch((e) => {
      console.log("This failed", e);
    });

// UPDATING DATA
  database.ref().update({
      age: 25,
      'location/weather/temperature': "60"
    })
    .then(() => { // Firebase returns promises.
      console.log("Age and temperature were updated.");
    })
    .catch((e) => {
      console.log("This failed", e);
    });

// SUBSCRIBING TO CHANGES/UNSUBSCRIBING
  database.ref().on('value', (snapshot) => { // Promises fail or resolve only once, so this must be a callback, not a .then function
    console.log(snapshot.val());
  })
  database.ref().off(); // Unsubscribe to entire database...

  // Or specific values
  onValueChange = (snapshot) => {
    console.log(snapshot.val());
  };
  database.ref("age").on('value', onValueChange);
  database.ref("age").off();

// GETTING DATA
database.ref()
  .once('value')
  .then((snapshot) => {
    snapshot.val();
  })
  .catch((e) => {
    console.log("error fetching data", e);
  })

// Array Data

database.ref("notes").push({
  note: "This is a test",
  user: "Harry C."
})


/// EXAMPLE

database.ref().set({
  name: "Andrew",
  job: {
    title: "Developer",
    company: "Amazon"
  }
});

database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
});

setTimeout(() => {
  database.ref("name").set("Harry");
  database.ref().off();
}, 2000)



database.ref("expenses").remove(); // Resetting the field to 0.
database.ref("expenses").push({
    description: "Sledge 1",
    note: "",
    amount: 1000,
    createdAt: 10391134});
database.ref("expenses").push({
    description: "Creep 2",
    note: "",
    amount: 3000,
    createdAt: 0});
database.ref("expenses").push({
    description: "Zombat 3",
    note: "",
    amount: 2000,
    createdAt: 13243523});
/*
database.ref("expenses")
  .once("value")
  .then((snapshot) => { // Our overall object
    const expenses = []; // the forEach here is actually operating on a snapshot object (and is not the traditional forEach function)
    snapshot.forEach((childSnapshot) => { // The child snapshot is the "value" of the key provided inside of ref, in this case an object of many different expenses.
      expenses.push({
        id: childSnapshot.key, // Key here refers to the literal text that is the key in the key value pair of that point in the object.
        ...childSnapshot.val() // The rest of the object should be assigned to this object.
      })
    });
    console.log(expenses);
  });

database.ref("expenses").on('value', (snapshot) => { //
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key, // Returns key value
      ...childSnapshot.val() // returns value of the object
    })
  });
  console.log(expenses);
});

database.ref("expenses").on('child_removed', (snapshot) => { // Whenever a child value in the object is removed, return the array.
  console.log(snapshot.key, snapshot.val()); // Returns removed data.
});

database.ref("expenses").on('child_changed', (snapshot) => { // Whenever a child value in the object is removed, return the array.
  console.log(snapshot.key, snapshot.val()); // Returns changed data.
});

database.ref("expenses").on('child_added', (snapshot) => { // Whenever a child value in the object is removed, return the array.
  console.log(snapshot.key, snapshot.val()); // Returns added data.
});*/