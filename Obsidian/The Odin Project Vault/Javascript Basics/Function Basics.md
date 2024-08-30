Imagine being able to take one of your scripts and bundling it into a little package that you could use over and over again without having to rewrite the code. That's the power of functions.

Consider the following example:

```
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))
```

In JavaScript, parameters are the items listed between the parentheses `()` in the function declaration. Function arguments are the actual values we decide to pass to the function.

The function definition is: ``function favoriteAnimal(animal)``. The parameter `animal` is found inside the parentheses. We could just as easily have replaced `animal` with `pet`, `x`, or `blah`. The name `animal` gives context on what the variable will/should contain.

Putting `animal` inside the parentheses tells JavaScript to send `some` value to our function. So `animal` is just a **placeholder** for some value.

The last line, ``favoriteAnimal('Goat')``, is where we are calling the `favoriteAnimal` function and passing the value `'Goat'` inside that function. `Goat` is our argument. We are saying to use `'Goat'` wherever the `animal` placeholder is.

Calling `favoriteAnimal()` inside of `console.log()` prints the return value of the function to the console. 

### Built-in browser functions

Examples of functions are in the following:

```
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
```

```
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

```
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

-------------------------

Some of the code you call when invoking a built-in browser function are written in other languages like C++. Some built-in browser functions are built on top of the default JavaScript language as part of browser APIs.

**Functions** that are part of objects are called **methods**.

A function to get a random whole number between 0 and a specified number (right-exclusive) is:

```
function random(number) {
	return Math.floor(Math.random() * number);
}
```

A function declaration is 'hoisted' meaning you can call the function above the function definition and it will work fine.

Sometimes parameters are optional. If you don't specify them, the function will generally adopt some kind of default behavior. For instance, the array `join()` function's parameter is optional:

```
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

If no parameter is included to specify a joining/delimiting character, a comma is used by default.

### Default parameters

If you're writing a function and want to support optional parameters, you can specify default values by adding `=` after the name of the parameter, followed by the default value:

```
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```

### Anonymous functions and arrow functions

So far we have just a created a function like so:

```
function myFunction() {
  alert("hello");
}
```

But you can also create a function that doesn't have a name:

```
(function () {
  alert("hello");
});
```

This is called an **anonymous function**, because it has no name. You'll often see anonymous functions when a function expects to receive another function as a parameter. In this case, the function parameter is often passed as an anonymous function.

This form of creating a function is also known as *function expression*. Unlike function declarations, function expressions are not hoisted.

### Anonymous function example

Let's say you want to run some code when the user types into a text box. To do this you can call the `addEventListener()` function of the text box. It expects (at least) two parameters:

- the name of the event to listen for, which in this case is `keydown`
- a function to run when the event happens

When the user presses a key, the browser will call the function you provided, and will pass it a parameter containing information about this event, including the particular key that the user pressed:

```
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
```

Instead of defining a separate `logKey()` function, you can pass an anonymous function into `addEventListener()`:

```
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

### Arrow functions

If you pass an anonymous function like this, there's an alternative form you can use, called an **arrow function**. Instead of `function(event)`, you write `(event) =>`:

```
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

If the function only takes one parameter, you can omit the parentheses around the parameter:

```
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});
```

Finally, if your function contains only one line that's a `return` statement, you can also omit the braces and the `return` keyword and implicitly return the expression. In this example, we're using the `map()` method of `Array` to double every value in the original array:

```
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

The `map()` method takes each item in the array in turn, passing it into the given function. It then takes the value returned by that function and adds it to a new array.

So in the example above, `item => item * 2` is the arrow function equivalent of:

```
function doubleItem(item) {
  return item * 2;
}
```

You can use the same concise syntax to rewrite the `addEventListener` example:

```
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`),
);
```

This is equivalent to:

```
function logKey(event) {
  return console.log(`You pressed "${event.key}".`);
}
```

This will call `console.log()` and implicitly return its return value which is `undefined` from the callback function.

Arrow functions are recommended.

There are some subtle differences between arrow functions and normal functions though.

Here's a complete working example of the "keydown" example:

### HTML
```
<input id="textBox" type="text" />
<div id="output"></div>
```

### JS

```
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
```

### Function scope and conflicts

When you create a function, the variables and other things defined inside the function are inside their own separate **scope**, meaning they are locked away in their own separate compartments, unreachable from code outside the functions.

The top-level outside all your functions is called the global scope. Values defined in the global scope are accessible from everywhere in the code.

Here is an example of name conflicts:

### HTML
```
<!-- Excerpt from my HTML -->
<script src="first.js"></script>
<script src="second.js"></script>
<script>
  greeting();
</script>
```

### JS
```
// first.js
const name = "Chris";
function greeting() {
  alert(`Hello ${name}: welcome to our company.`);
}
```

### JS
```
// second.js
const name = "Zaptec";
function greeting() {
  alert(`Our company is called ${name}.`);
}
```

Both functions you want to call are called `greeting()`, but you can only ever access the `first.js` file's `greeting()` function (the second one is ignored). In addition, an error results when attempting (in the `second.js` file) to assign a new value to the `name` variable because it was already declared with `const`, and so can't be reassigned.

Keeping variables locked away in functions avoid things like re-definitions.

### Function return values

Example:

```
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Function library example</title>
  <style>
    input {
      font-size: 2em;
      margin: 10px 1px 0;
    }
  </style>
  </head>
<body>

  <input class="numberInput" type="text">
  <p></p>

  <script>
    const input = document.querySelector('.numberInput');
    const para = document.querySelector('p');
    
    function squared(num) {
	  return num * num;
	}
	
	function cubed(num) {
	  return num * num * num;
	}
	
	function factorial(num) {
	  if (num < 0) return undefined;
	  if (num === 0) return 1;
	  let x = num - 1;
	  while (x > 1) {
	    num *= x;
	    x--;
	  }
	  return num;
	}

	input.addEventListener("change", () => {
	  const num = parseFloat(input.value);
	  if (isNaN(num)) {
	    para.textContent = "You need to enter a number!";
	  } else {
	    para.textContent = `${num} squared is ${squared(num)}. `;
	    para.textContent += `${num} cubed is ${cubed(num)}. `;
	    para.textContent += `${num} factorial is ${factorial(num)}. `;
	  }
	});


  </script>
</body>
</html>
```

By adding a listener to the `change` event, this function runs whenever the `change` event fires on the text input, that is, when a new value is entered into the text `input`, and submitted (for example, enter a value, then un-focus the input by pressing `TAB` or `RETURN`). When this anonymous function runs , the value in the `input` is stored in the `num` constant.

It's generally a good idea to check that any necessary parameters are validated (as the input's value is here), and that any optional parameters have some kind of default value provided.

------------------------

You can change an outer variable inside a function without something like the `global` keyword in Python. 

Example:

![[Screenshot from 2024-08-19 16-52-18.png]]

The outer variable is only used if there's no local one.

If a same-named variable is declared inside the function then it *shadows* the outer one. For instance, in the code below the function uses the local `userName`. The outer one is ignored:

![[Screenshot from 2024-08-19 16-55-03.png]]

It's a good practice to limit the use of global variables.

### Parameters

In this example, we have a variable `from` and pass it to the function. Please note: the function changes `from`, but the change is not seen outside, because a function always gets a copy of the value:

![[Screenshot from 2024-08-26 15-12-01.png]]

### Default values

If a function is called, but an argument is not provided, then the corresponding value becomes `undefined`. For instance, the aforementioned function `showMessage(from, text)` can be called with a single argument:

![[Screenshot from 2024-08-26 15-17-57.png]]

That's NOT an error. Such a call would output `"*Ann*: undefined"`.

We can specify the so-called "default" (to use if omitted) value for a parameter in the function declaration, using `=`:

![[Screenshot from 2024-08-26 15-21-10.png]]

Now if the `text` parameter is not passed, it will get the value `"no text given"`.

The default value also jumps in if the parameter exists, but STRICTLY equals `undefined`, like this:

![[Screenshot from 2024-08-26 15-23-42.png]]

Here `"no" text given"` is a string, but it can be a more complex expression, which is only evaluated and assigned if the parameter is missing. So, this is also possible:

![[Screenshot from 2024-08-26 15-27-08.png]]

In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.

In the example above, `anotherFunction()` isn't called at all, if the `text` parameter is provided.

On the other hand, it's INDEPENDENTLY called EVERY TIME when `text` is missing.

-------------------

When JavaScript didn't support syntax for default parameters, people would try using other ways to specify them like:

![[Screenshot from 2024-08-26 15-34-18.png]]

or using the `||` operator:

![[Screenshot from 2024-08-26 15-34-54.png]]

These tests can be done can be done anywhere in the function.

Modern JavaScript engines support the nullish coalescing operator `??` which is better when most falsy values, such as `0`, should be considered "normal" (different than the behavior of `||`):

![[Screenshot from 2024-08-26 15-45-46.png]]

`confirm` is like `alert` or `prompt` but returns a boolean:

![[Screenshot from 2024-08-26 15-50-23.png]]

### Returning a value

If a function does not return a value, it is the same as if it returns `undefined`:

![[Screenshot from 2024-08-26 15-53-01.png]]

An empty `return` is also the same as `return undefined`:

![[Screenshot from 2024-08-26 15-54-16.png]]

For a long expression in `return` , it might be tempting to put it on a separate line:

![[Screenshot from 2024-08-26 15-56-37.png]]

But this doesn't work, because JavaScript assumes a semicolon after `return`. This'll work the same as:

![[Screenshot from 2024-08-26 15-57-44.png]]

So, it effectively becomes an empty return.

If we want the returned expression to wrap across multiple lines, we should start it at the same line as `return`. Or at least put the opening parentheses there as follows:

![[Screenshot from 2024-08-26 15-59-25.png]]

This will work as we expect it to.

### Naming a function

A function should only do the action it is named for, nothing more. A few examples of breaking this rule are:

- `getAge` would be bad if it  shows an `alert` with the age (should only get).
- `createForm` would be bad if it modifies the document, adding a form to it (should only create it and return).
- `checkPermission` would be bad if it displays the `access granted/denied` message (should only perform the check and return the result).

### Function expressions

*Function declaration* looks like:

![[Screenshot from 2024-08-30 18-09-08.png]]

Another syntax is called a *Function Expression*. It allows us to create a new function in the middle of any expression. For example:

![[Screenshot from 2024-08-30 18-11-53.png]]

Here we can see a variable `sayHi` getting a value, the new function, created as `function() { alert("Hello"); }`.

The function creation happens in the context of the assignment expression.

There's no name after the `function` keyword. Omitting a name is allowed for Function Expressions.

We are creating a function and putting it into the variable `sayHi`.

In more advanced situations, a function may be created and immediately called or scheduled for a later execution, not stored anywhere, thus remaining anonymous.

### Function is a value

No matter how a function is created, a function is a value.

We can even print out that value using alert:

![[Screenshot from 2024-08-30 18-19-07.png]]

The last line does not run the function, because there are no parentheses after `sayHi`. The code above shows its string representation, which is the source code.

A function is a special value since for instance we can call it like `sayHi()` but it's still a value. So we can work with it like other kinds of values.

We can copy a function to another variable:

![[Screenshot from 2024-08-30 18-22-50.png]]

We could also have used a Function Expression to declare `sayHi`, in the first line:

![[Screenshot from 2024-08-30 18-25-43.png]]

### Callback functions

We'll write a function `ask(question, yes, no)` with three parameters:

`question`
Text of the question

`yes`
Function to run if the answer is "Yes"

`no`
Function to run if the answer is "No"

The function should ask the `question` and, depending on the user's answer, call `yes()` or `no()`:

