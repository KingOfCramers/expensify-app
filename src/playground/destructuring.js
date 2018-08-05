// Object Destructuring

// From the book.publisher object, pull off the name property, and create a new constant
// called publisherName. If that property doesn't exist, then use the string
// Default title.

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Random House"
  }
};

const { name: publisherName = "Default Title" } = book.publisher;
console.log(`${publisherName}`);

// Object destructuring can also be used for arguments in funcitons.
const add = ({a, b}, c) => {
  return a + b;
}

console.log(add({1,3}, 100));



// Array Destructuring

const address = ["1299 S Juniper", "Philly", "Penn", "19392"];

const [street, , state = "Massachusetts"] = address;
// Use commas to skip over variables you don't want.
// Default values can be assigned too.

console.log(`You are at ${street} Street, in the state of ${state}`);

const [ item, , mediumCost ] = ["Coffee","$2.00","$2.50","$2.75"];

console.log(`A medium ${item} costs ${mediumCost}`);