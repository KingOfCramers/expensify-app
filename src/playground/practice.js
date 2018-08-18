// The filter HOC function... which accepts a callback as a function.

const animals = [
{ name: "fluffykins", species: "cat" }
{ name: "jim", species: "dog" }
{ name: "bob", species: "dog" }
{ name: "timmy", species: "rabbit" }
{ name: "sam", species: "mouse" }
{ name: "tim", species: "cat" }
{ name: "joe", species: "dog" }
];

var isDog = (animal) => {
  return animal.species === "dog";
};

var dogs = animals.filter();

// Essentially this is what filter is doing....
// Array.prototype.filter ===
function(trueCallback){
  const newarray = [];
  for(var i = 0; i<this.length; i++){ // For every item in this array...
    if(trueCallback(this[i])){ // Call the truth checker callback
      newarray.push(this[i]);  // And if it's successful, push the item to a new array.
    };
  };
  return newarray;  // And then return the array at the end.
}