/* *
1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
*/

const fruits = ["Apple", "Mango", "Banana", "Grape", "Pineapple"];

let thirdElem = fruits[2];
console.log("Third Element is: ", thirdElem);

fruits[1] = "Jambura";

console.log("Final array is: ", fruits);

/* 
2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/

const touristDest = ["Cox's Bazar", "Potenga", "Kuakata"];

touristDest.push("Chittagong");
console.log(touristDest);
touristDest.push("Saint Martin", "Lalbag Fort");
console.log("Adding three destination", touristDest);
touristDest.pop();
console.log("Removing one destination and print the final array", touristDest);

/* *
* 3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.

 */

const books = [
  "Don Quixote",
  "The Greatest Gatsby",
  "Tupi",
  "The Java Programming",
  "Eloquent Javascript",
];

let javascriptBook = books.includes("Eloquent Javascript");
console.log(javascriptBook);

if (!javascriptBook) {
  console.log("Javascript Book is not present in the list ");
} else {
  console.log("The Javascript book is present.");
}

/* *
*4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.

*/

let v1 = ["Green", "Blue"];
let v2 = "America";
let v3 = true;
let v4 = 7;

let newArr=[v1, v2, v3, v4];

// using loop
for (let i = 0; i < newArr.length; i++) {
  if (Array.isArray(newArr[i])) {
    console.log(newArr[i], ' is an array');
  } else {
    console.log(newArr[i], ' is not an array');
  }
}

// Using manually
if (Array.isArray(v1)) {
  console.log("v1 is an array.");
} else {
  console.log("v1 is not an array");
}

if (Array.isArray(v2)) {
  console.log("v2 is an array.");
} else {
  console.log("v2 is not an array");
}

if (Array.isArray(v3)) {
  console.log("v3 is an array.");
} else {
  console.log("v3 is not an array");
}

if (Array.isArray(v4)) {
  console.log("v4 is an array.");
} else {
  console.log("v4 is not an array");
}

/* *
 *5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
 */

let arr1 = ["Dhaka", "Rajshahi"];
let arr2 = ["Comilla", "Feni"];

console.log(arr1, arr2);

let concatArr = arr1.concat(arr2);
console.log(concatArr);
