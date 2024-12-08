## Arrays in JavaScript:

`const cars = ["Saab", "Volvo", "BMW"];`

It is common practice to declare arrays with the `const` keyword.

Spaces and line breaks are not important.

```
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];
```

You can also create and array, and then provide the elements:

```
const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
```

The following uses the keyword "new":

`const cars = new Array("Saab", "Volvo", "BMW");`

The examples do the same thing. There is no need to use `new Array()`. For simplicity, readability, and execution speed, use the array literal method.

Access arrays elements with the index number:

```
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
```

Changing an array element:

`cars[0] = "Opel";`

`toString()` converts an array to a string of (comma separated) array values:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // Banana,Orange,Apple,Mango
```

The full array can be accessed by referring to the array name:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); // (4) ['Banana', 'Orange', 'Apple', 'Mango']
```

Arrays are a special type of objects. The `typeof` operator in JavaScript returns "object" for arrays. But, JavaScript arrays are best described as arrays.

Arrays use **numbers** to access its "elements". Here, `person[0]` returns John:

`const person = ["John", "Doe", 46];`

Objects use **names** to access their "members". Here, `person.firstName` returns John:

`const person = {firstName: "John", lastName: "Doe", age: 46};`

Array elements can be objects.

JavaScript variables can be objects. Arrays are special kinds of objects. Because of this, you can have variables of different types in the same Array. You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

```
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
```

The real strength of JavaScript arrays are the built-in array properties and methods:

```
cars.length // Returns the number of elements
cars.sort() // Sorts the array
```

Accessing the last array element:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
```

You can loop through an array using a for loop:

```
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Arrays</h1>
<h2>Looping an Array</h2>

<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

Results in:

![[Screenshot from 2024-10-17 09-00-23.png]]

You can also use the `Array.forEach()` function:

```
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Arrays</h1>
<h2>The forEach() Method</h2>

<p>Call a function for each array element:</p>

<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

document.getElementById("demo").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
} 
</script>

</body>
</html>
```

Results in:

![[Screenshot from 2024-10-17 09-05-26.png]]

The easiest way to add a new element to an array is using the `push()` method:

```
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
```

A new element can also be added using the `length` property:

```
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";
```

WARNING: Adding elements with high indexes can create undefined "holes" in an array:

```
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon"; // Creates undefined "holes" in fruits
```

Associative Arrays

Many programming languages support arrays with named indexes. Arrays with named indexes are called associative arrays (or hashes). JavaScript does **not** support arrays with named indexes. In JavaScript, **arrays** always use **numbered indexes**.

WARNING: If you use named indexes, JavaScript will redefine the array to an object. After that, some array methods and properties will produce **incorrect results**:

```
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined
```

Arrays are a special kind of objects, with numbered indexes.

You should use **objects** when you want the elements to be **strings (text)**. You should use **arrays** when you want the element names to be **numbers**.

JavaScript has a built-in array constructor `new Array()`. But you can safely use `[]` instead. These two different statements both create a new empty array named points:

```
const points = new Array();
const points = [];
```

Arrays with 6 numbers:

```
const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];
```

The `new` keyword can produce some unexpected results:

This is fine:

```
// Create an array with three elements:
const points = new Array(40, 100, 1);
```

This is fine too:

```
// Create an array with two elements:
const points = new Array(40, 100);
```

This does something else though:

```
// Create an array with one element ??? NO
const points = new Array(40);  
```

This is a common error.

`const points = [40];`

is NOT the same as:

`const points = new Array(40);`

To create a one-element array, write:

```
// Create an array with one element:
const points = [40];
```

But to create a 40 element array, write:

```
// Create an array with 40 undefined elements:
const points = new Array(40);  
```

How do you recognize an array? How do I know if a variable is an array? The problem is that the JavaScript `typeof` operator returns "`object`":

```
const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
```

The typeof operator returns object because a JavaScript array is an object.

Solution 1:

To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method `Array.isArray()`:

```
const fruits = ["Banana", "Orange", "Apple"];
Array.isArray(fruits); // true
```

Solution 2:

The `instanceof` operator returns true if an object is created by a given constructor:

```
const fruits = ["Banana", "Orange", "Apple"];

(fruits instanceof Array); // true
```

Nested Arrays and Objects

Values in objects can be arrays, and values in arrays can be objects. To acccess arrays inside arrays, use a for-in-loop for each array:

```
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Arrays</h1>
<h2>Nested JavaScript Objects and Arrays.</h2>

<p id="demo"></p>

<script>
let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
};

for (let i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
}

document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
```

Displays:

![[Screenshot from 2024-10-17 09-40-59.png]]

Note if we did:

`document.getElementById("demo").textContent = x;`

We would see the tags themselves. `innerHTML` parses the string as HTML code and renders it. `textContent` literally renders as literal text.

## JavaScript Array Methods

The `length` property returns the length (size) of an array:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length; // 4
```

The `toString()` method converts an array to a string of comma separated array values:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString(); // Banana,Orange,Apple,Mango
```

Get the third element of fruits using at():

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2); // Apple
```

Get the third element of fruits using []:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[2]; // Apple
```

The `at()` method returns an indexed element from an array. It returns the same as `[]`. It was a more recent addition to the language.

Many languages allow `negative bracket indexing` like [-1] to access elements from the end of an object / array / string.

This was not possible in JavaScript because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object. The `at()` method was added to solve this problem (it can take negative indices).

The `join()` method also joins all array elements into a string. In behaves just like `toString()`, but in addition you can specify the separator:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
```

Note that this is kind of the reverse of how Python would do it: `" * ".join(fruits)`

`pop()` removes the last element of the array and returns it:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop(); // Mango
```

`push()` adds a new element at the end of an array; it even returns the new array length:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi"); // 5
```

`The shift()` method removes the first element of an array and "shifts" all other elements to a lower index; it returns the element shifted out:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift(); // Banana
```

The `unshift()` method adds a new element to an array (at the beginning) and "unshifts" older elements; it returns the new array length:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.unshift("Lemon"); // Length === 5 and fruits === ['Lemon', 'Banana', 'Orange', 'Apple', 'Mango']
```

You can change elements of an array in the usual way in other programming languages:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi"; // ['Kiwi', 'Orange', 'Apple', 'Mango']
```

The `length` property provides an easy way to append a new element to an array:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
```

`delete()` deletes an element of the array **without** shifting so it leaves an undefined hole in the array:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[1]; // ['Banana', undefined, 'Apple', 'Mango']
```

Concatenating arrays means joining arrays end-to-end. The `concat()` method creates a new array by merging (concatenating) existing arrays:

```
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys); // ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']
```

The `concat()` method does not change the existing arrays. It always returns a new array so you should assign its return value to a new array. `concat()` can take any number of array arguments:

```
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
```

`concat()` can also takes strings as arguments:

```
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); // ["Emil", "Tobias", "Linus", "Peter"]
```

`copyWithin()` copies array elements to another position in an array; it unshifts everything to the right while also preserving the length so the last element(s) will get unshifted out necessarily.

This copies to index 2, all elements from index 0:

```
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
document.getElementById("demo").innerHTML = fruits.copyWithin(2, 0); // Banana,Orange,Banana,Orange,Apple
```

This copies to index2, the elements from index 0 to 2:

```
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
document.getElementById("demo").innerHTML = fruits.copyWithin(2, 0, 2); // Banana,Orange,Banana,Orange,Kiwi
```

Flattening an array is the process of reducing the dimensionality of an array. It is useful when you want to convert a multi-dimensional array into a one-dimensional array.

`flat()` creates a new array with sub-array elements concatenated to a specified depth:

```
const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat(); // [1, 2, 3, 4, 5, 6]
```

`flatMap()` first maps all elements of an array and then creates a new array by flattening the array:

```
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]); // [1, 10, 2, 20, 3, 30, 4, 40, 5, 50, 6, 60]
```

There is also `map()`:

```
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.map(x => x ** 2); // [1, 4, 9, 16, 25, 36]
```

The `splice()` method adds new items to an array.

The first parameter defines the position **where** new elements should be **added** (spliced in).
The second parameter defines **how many** elements should be **removed.**
The rest of the parameters, ("Lemon", "Kiwi", "Grapefruit") in the following examples, define the new elements to be **added**.
`splice()` method returns an array with the deleted items.

Here `splice()` acts like C++ .insert() into strings:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi", "Grapefruit"); // ["Banana", "Orange", "Lemon", "Kiwi", "Grapefruit", "Apple", "Mango"]
```

Here `splice()` acts like C++ .replace() with strings:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const removed = fruits.splice(2, 2, "Lemon", "Kiwi", "Grapefruit");
// fruits === ["Banana", "Orange", "Lemon", "Kiwi"]
// removed === ["Apple", "Mango"]
```

**Important:**

With clever parameter setting, you can use `splice()` to remove elements without leaving "holes" in the array:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1); // ["Banana", "Orange", "Mango"]
```

The position to start adding/deleting is 2. 1 means one item to remove. No other parameters mean nothing else should be added. So this is a pure remove that doesn't leave holes.

A new addition to the language is `toSpliced()` which is a safe way to splice an array without altering the original array. The difference between `toSpliced()` and `splice()` is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

```
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1); // [Feb, Mar, Apr]
```

The 'slice()' (different from 'splice()' from above) method slices out a piece of an array into a new array. Here it goes from 1 to the end:

```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1); ["Orange", "Lemon", "Apple", "Mango"]
```

`slice()` creates a new array. It does not remove any elements from the source array.

The slice() method can take two arguments like `slice(1, 3)`. The method then selects elements from the start argument, and up to (but not including) the end argument:

```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); ["Orange", "Lemon"]
```

JavaScript automatically converts an array to a comma separated string when a primitive value is expected. This is always the case when you try to output an array. These two examples will produce the same result:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
```

and

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
```

All JavaScript objects have a `toString()` method.

## JavaScript Array Search

The `indexOf()` method searches an array for an element and returns its position.

```
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1; // 1
```

Syntax: `array.indexOf(item, start)`

item: Required. The item to search for.
start: Optional. Where to start the search. Negative values will start at the given position counting from the end, and searches to the end.

`Array.indexOf()` returns -1 if the item is not found.

If the item is present more than once, it returns the position of the first occurrence.

`Array.lastIndexOf()` is the same as `Array.indexOf()`, but returns the position of the last occurrence of the specified element.

```
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf() + 1; // 3
```

Syntax: `array.lastIndexOf(item, start)`

item: Required. The item to search for.
start: Optional. Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning (but "last" is still defined as appearing to the right of all other matches).

`Array.includes()` checks if an element is present in an array (including NaN, unlike indexOf).

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango"); // true
```

The `find()` method returns the value of the first array element that passes a test function.
This example finds (returns the value of) the first element that is larger than 18.
Note the function takes `value` which is the value of the current element, `index` which is the index of the current element, and `array` which is "the array of the current element":

```
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction); // 25

function myFunction(value, index, array) {
  return value > 18;
}
```

This is the same as:

```
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(value => value > 18); // 25
```

`findIndex()` is the same but returns the index of the first array element that passes a test function:

```
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction); // 25

function myFunction(value, index, array) {
  return value > 18;
}
```

`findLast()` starts from the end of the array and returns the value of the first element that satisfies a condition:

```
const temp = [27, 28, 50, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40); // 42
```

`findLastIndex()` is the same but returns the index of the last item thatt satisfies the condition:

```
const temp = [27, 28, 50, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40); // 4
```

## JavaScript Sorting Arrays

The `sort()` method sorts an array alphabetically:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
```

The `reverse()` method reverses the elements in an array:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
```

By combining `sort()` and `reverse()`, you can sort an array in descending order:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
```

`toSorted()` is a safe way to sort an array without altering the original array:

```
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
```

`toReversed()` is a safe way to reverse an array without altering the original array:

```
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
```

### Numeric Sort

By default, the `sort()` function sorts values as **strings**.

This works well for strings ("Apple" comes before "Banana").

If numbers are sorted as strings, 25 is bigger than 100, because "2" is bigger than "1".

Because of this, the `sort()` method will produce incorrect results when sorting numbers.

You can fix this by providing a **compare function**:

```
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
```

Use the same trick to sort an array descending:

```
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
```

The purpose of the compare function is to define an alternative sort order. The compare function should return a negative, zero, or positive value, depending on the arguments:

```
function(a, b){return a - b}
```

When the `sort()` function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

For example,

The compare function compares all the values in the array, two values at a time `(a, b)`. When comparing 40 and 100, the `sort()` method calls the compare function(40, 100). The function calculates 40 - 100 `(a - b)`, and since it is negative (-60), the sort function will sort 40 as a value lower than 100.

You can shuffle a numeric array like this:

```
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
```

but this favors some numbers over others.

The most popular correct method is the Fisher-Yates shuffle:

```
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length - 1; i > 0; --i) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
```

To find the lowest or highest value value in an array you can:

1) Sort the array and read the first or last element
2) Use Math.min() or Math.max()
3) Write a home made function

```
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
```

or sort descending:

```
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){b - a});
```

Note that sorting the entire array is a very inefficient method to find an extreme value.

You can use `Math.min.apply` to find the lowest number in an array:

```
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
```

similarly,

```
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
```

The fastest way to find a min is to use a home made method:

```
function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}
```

similarly for finding the max:

```
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
```

JavaScript arrays often contain objects:

```
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
```

Even if objects have properties of different data types, the `sort()` method can be used to sort the array.
The solution is to write a compare function to compare the property values:

`cars.sort(function(a, b){return a.year - b.year});`

We can also sort the objects by the string-valued type field:

```
cars.sort(function(a, b) {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1};
  if (x > y) {return 1};
  return 0;
});
```

Before 2019, the specification allowed unstable sorting algorithms such as QuickSort. After ES2019, browsers must use a stable sorting algorithm:

When sorting elements on a value, the elements keep their relative position to other elements with the same value.

Say we have this array:

```
const myArr = [
  {name:"X00",price:100 },
  {name:"X01",price:100 },
  {name:"X02",price:100 },
  {name:"X03",price:100 },
  {name:"X04",price:110 },
  {name:"X05",price:110 },
  {name:"X06",price:110 },
  {name:"X07",price:110 }
];
```

When sorting on price, the result is not allowed to come out with the name in an other relative position because they were "sorted" by name first. So this is not a possible result:

X01 100
X03 100
X00 100
X03 100
X05 110
X04 110
X06 110
X07 110

## JavaScript Array Iteration

The `forEach()` method calls a callback function once for each array element:

```
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction); // txt lists the numbers

function myFunction(value, index, array) {
  txt += value + "<br>";
}
```

The example above uses only the value parameter. You can rewrite the function to just pass in value:

```
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction); // txt lists the numbers

function myFunction(value) {
  txt += value + "<br>";
}
```

The `map()` method creates a new array by performing a function on each array element. The `map()` method does not execute the function for array elements without values. The `map()` method does not change the original array.

This example multiplies each array value by 2:

```
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction); // [90, 8, 18, 32, 50]

function myFunction(value, index, array) {
  return value * 2;
}
```

Again if you just use value, you can omit the other 2 parameters.

The `filter()` method creates a new array with array elements that pass a test.

This example creates a new array from elements with a value larger than 18:

```
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(x => x > 18); // [45, 25]
```

The `reduce()` method runs a function on each array element to reduce it to a single value. It works left-to-right. `reduceRight()` works right-to-left. `reduce()` does not reduce the original array.

This example finds the sum of all numbers in an array:

```
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce((total, value, index, array) => total + value); // 99
```

Again we could omit `index` and `array` here.

`reduce()` can accept an initial value:

```
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value; // 199
}
```

The `every()` method checks if all array values pass a test.

This checks if all values are larger than 18:

```
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(value => value > 18); // false
```

The `some` method checks if some array values pass a test.

This checks if some array values are larger than 18:

```
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(value => value > 18); // true

```

The `Array.from()` method returns an Array object from any object with a length property or any iterable object.

Create an Array from a String:

```
Array.from("ABCDEFG"); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
```

The `Array.keys()` method returns an Array Iterator object with the keys of an array.

Create an Array Iterator objects, containing the keys of the array:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  text += x + "<br>";
} // text lists:
// 0
// 1
// 2
// 3
```

`entries()` creates an Array Iterator, and then you can iterate over the key/value pairs:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}
```

It returns:

[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]

but doesn't change the original array.

The `with()` method is a safe way to update elements in an array without altering the original array:

```
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March"); // [Januar,Februar,March,April]
```

The `...` operator expands an iterable (like an array) into its elements (like unpacking in Python):

```
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4]; // [Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec]
```

-----------------------------------------------------------
## Looping code

Suppose we wanted to draw 100 random circles on a `<canvas>` element:

![[Screenshot from 2024-11-03 13-44-05.png]]

```
const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
});

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI,
    );
    ctx.fill();
  }
}

btn.addEventListener("click", draw);
```

### Looping through a collection

Most of the time when you use a loop, you will have a collection of items and want to do something with every item.

One type of collection is the `Array`. But there are other collections in JavaScript as well, including `Set` and `Map`.

The basic tool for looping through a collection is the `for...of` loop:

```
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

It prints:

Leopard
Serval
Jaguar
Tiger
Caracal
Lion

Think of it like this: on each iteration you want to print **one cat "of" the group cats**.
This behaves like Python's `for in` loop (`for cat in cats:...`).
It gives the values of the elements.

In this example, `for (const cat of cats)` says:

1) Given the collection `cats`, get the first item "of" the collection
2) Assign it to the variable `cat` and then run the code between the curly braces `{}`
3) Get the next item, and repeat (2) until you've reached the end of the collection

If you used `for...in` in JavaScript:

```
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat in cats) {
  console.log(cat);
}
```

it prints:

0
1
2
3
4
5

This does NOT behave like Python's `for in` if you say something like `for cat in cats:...`
It does behave like: `for i in range(len(cats)):...` in Python.
It gives the indices of the elements. Think 'in' for 'index'.

To return whether or not a string starts with "L", use:

`cat.startsWith("L");`

The following code:

```
const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));
```

gives us when we click `Calculate`:

1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81

Finished!

--------------------

Say we wanted to search through an array of contacts and telephone numbers and return just the number we wanted to find?

### HTML
```
<label for="search">Search by contact name: </label>
<input id="search" type="text">
<button>Search</button>

<p></p>
```

### JS
```
const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];

const para = document.querySelector("p");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contacts.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s numbers is ${splitContact[1]}`;
    }
    break;
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});
```

Output for input "Chris":

![[Screenshot from 2024-11-07 08-57-49.png]]

--------------------------------

Here we iterate over some number range but return only the numbers that are squares of integers:

### HTML
```
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

### JS
```
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});
```

Output if input 12:

![[Screenshot from 2024-11-07 08-59-37.png]]


There is while and do...while in JavaScript.

---------------------------------

Filling in a guest list:

### JS
```
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';
```


If you're iterating through an array or some other object that supports it, and don't need access to the index position of each item, the `for...of` is the best choice.

---------------------------------------

If you declare a variable in a for loop (like the counter i for instance), it is local to that loop (cannot be seen outside of it):

![[Screenshot from 2024-11-26 08-21-21.png]]

If you use an existing variable:

![[Screenshot from 2024-11-26 08-22-11.png]]

The combination "infinite loop" + `break` as needed" is great for situations when a loop's condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.

Syntax constructs that are not expressions cannot be used with the ternary operator `?`. In particular, directives such as `break/continue` aren't allowed there. For example,

![[Screenshot from 2024-11-26 08-31-26.png]]

cannot be written as:

![[Screenshot from 2024-11-26 08-32-01.png]]

### Labels for break/continue

Sometimes we need to break out from multiple nested loops at once.

For example, in the code below we loop over `i` and `j`, prompting for the coordinates `(i, j)` from `(0, 0)` to `(2, 2)`:

![[Screenshot from 2024-11-26 08-34-58.png]]

We need a way to stop the process if the user cancels the input. The ordinary `break` after `input` would only break the inner loop. Here, label come to the rescue!

A *label* is an identifier with a colon before a loop:

![[Screenshot from 2024-11-26 08-37-28.png]]

The `break <labelName>` statement in the loop below breaks out to the label:

![[Screenshot from 2024-11-26 08-39-54.png]]

In the code above, `break outer` looks upwards for the label named `outer` and breaks out of that loop.

So the control goes straight from `(*)` to `alert('Done!')`.

We can also move the label onto a separate line:

![[Screenshot from 2024-11-26 08-42-09.png]]

Note that labels do not allow you to "jump" anywhere (like a goto in C++ would)

They don't allow us to jump into an arbitrary place in the code.

For example, it is impossible to do this:

![[Screenshot from 2024-11-26 08-44-47.png]]

A `break` directive must be inside a code block. Technically, any labelled code block will do. For example:

![[Screenshot from 2024-11-26 08-46-14.png]]

Although, 99.9% of the time `break` is used inside loops.

A `continue` is only possible from inside a loop.

---------------------------

### Assignment

#### Testing

```
const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
```

At the very top of the file we use `require()` to import the code from the javascript file (`helloWorld.js`) so that we can test it.

The next block (`describe()`) is the body of the test. Basically, all it's doing is running your code and testing to see if the output is correct. The `test()` function describes what should be happening in plain english and then includes the `expect()` function. It should be simple to read for this simple example.

Here is the `helloWorld.js` file:

```
const helloWorld = function() {
  return ''
}

module.exports = helloWorld
```

The module.exports on the last line is how we export the function so that it can be imported with `require()` in the spec file.
