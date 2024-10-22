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

Objects use **names** to access its "members". Here, `person.firstName` returns John:

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
let size = fruits.length;
```

The `toString()` method converts an array to a string of comma separated array values:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString(); // Banana,Orange,Apple,Mango
```

Get the third element of fruits using at():

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
```

Get the third element of fruits using []:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[2];
```

The `at()` method returns an indexed element from an array. It returns the same as `[]`. It was a more recent addition to the language.

Many languages allow `negative bracket indexing` like [-1] to access elements from the end of an object / array / string.

This was not possible in JavaScript because [] is used for accesssing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object. The `at()` method was added to solve this problem (it can take negative indices).

The `join()` method also joins all array elements into a string. In behaves just like `toString()`, but in addition you can specify the separator:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
```

Note that this is kind of the reverse of how Python would do it: `" * ".join(fruits)`

`pop()` removes the last element of the array and returns it:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
```

`push()` adds a new element at the end of an array; it even returns the new array length:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");
```

`The shift()` method removes the first element of an array and "shifts" all other elements to a lower index; it returns the element shifted out:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
```

The `unshift()` method adds a new element to an array (at the beginning) and "unshifts" older elements; it returns the new array length:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.unshift("Lemon");
```

You can change elements of an array in the usual way in other programming languages:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
```

The `length` property provides an easy way to append a new element to an array:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
```

`delete()` deletes an element of the array **without** shifting so it leaves an undefined hole in the array:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[1];
```

Concatenating arrays means joining arrays end-to-end. The `concat()` method creates a new array by merging (concatenating) existing arrays:

```
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
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
const myChildren = arr1.concat("Peter"); 
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
document.getElementById("demo").innerHTML = fruits.copyWithin(2, 0, 2);
```

Flattening an array is the process of reducing the dimensionality of an array. It is useful when you want to convert a multi-dimensional array into a one-dimensional array.

`flat()` creates a new array with sub-array elements concatenated to a specified depth:

```
const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat();
```

