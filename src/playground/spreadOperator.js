// Spread operator can be used to spread arrays or objects...

const user = {
  name: "Matt",
  location: "BOSTON"
  age: 24
}

console.log({
  ...user,
  location: "DC",
  name: "Harry"
});

/// You can reassign object values as well within the new object.
// Keep in mind, however, that using hte spread operator lower in the new
// object will overwrite the newly changed values ––>

console.log({
  name: "Harry",
  location: "DC",
  ...user
}); // Will output previous object!