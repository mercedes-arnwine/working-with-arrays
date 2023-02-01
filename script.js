var hobbies = [
  "basketball",
  "soccer",
  "singing",
  "swimming",
  "dancing",
  "sewing"
];

//console.log(hobbies.length);

hobbies.push("traveling");
//console.log(hobbies);

//console.log(hobbies[2]);

hobbies.pop();

//console.log(hobbies);

hobbies.splice(2, 0, "archery", "drawing");
//console.log(hobbies);

hobbies.shift();

//console.log(hobbies);

hobbies.unshift("video games", "discovering");
//console.log(hobbies);

var goals = ["doctor", "PhD", "React Developer"];

var allTheThings = hobbies.concat(goals);

//console.log(allTheThings);

console.log(allTheThings.indexOf("doctor"));

// Using the index you discovered, remove that element
allTheThings.splice(8, 1);

// Log out 'allTheThings' to confirm that it is gone
console.log(allTheThings);

// Use map() to add 'I can't wait to start' to the beginning of each array element
var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}!`;
});
console.log(plans);
