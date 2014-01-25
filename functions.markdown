---
layout: slides
categories: slides
title: Functions and Scoping
---

Functions and Scoping
=====================

Definition and Invocation
-------------------------

Functions are units of code that can be defined and then invoked later. Functions grant major benefits to your program. They make your code more readable by breaking them into logical, understandable blocks. They reduce the chance of bugs by breaking your program into separate encapsulated sections of code. They reduce code length by allowing reuse of code. Use them often.

There are two common ways to define a function. The first way:

{% highlight js %}
// Function definition
var helloFn = function() {
	console.log("Hello!");
}

// Function invocation
helloFn();
{% endhighlight %}

The second way:

{% highlight js %}
// Function definition
function helloFn() {
	console.log("Hello!");
}

// Function invocation
helloFn();
{% endhighlight %}

All the examples in this class will use the first way, because it emphasizes the fact that functions are data. They are first-class citizens, and are no different from any other value. You may use whichever style you prefer in your code, as long as you are consistent. (If you are taking CS142, you will see the second style in that class.)

It is very, very important not to confuse function definition with function invocation. Function definition = creating a function. Function invocation = running a function. We will be doing fancy things with function definitions and invocations later.

Parameters
----------

JavaScript functions can take zero or more parameters. For example, the `helloFn` function above took zero parameters, and the `console.log` function takes one argument. Upon invocation, parameters are passed to the function by placing them into the brackets. 

JavaScript functions are variadic, that is, they can take any number of parameters. It is legal to call a function with a different number of parameters as in its declaration. If we call a function with fewer parameters than in the definition, then the parameters are assigned from left to right, and the remaining parameter variables will be set to undefined.

{% highlight js %}
var greet = function(greeting, person) {
	console.log(greeting + ", " + person + "!")
}

greet("Hail");
{% endhighlight %}

If we call a function with more parameters than in the definition, then all the available parameter variables with be bound to the parameters. The remaining parameters will not be bound to parameter variables i.e. they will become nameless.

{% highlight js %}
var greet = function(greeting, person) {
	console.log(greeting + ", " + person + "!")
}

greet("Hail", "Stanford", "Hail");
{% endhighlight %}

However, it is possible to recover the extra parameter through the `arguments` variable. `arguments` is an array-like object that contains all the parameters passed to the function. It is zero-indexed from left to right. We can index into arguments to recover the extra parameter:

{% highlight js %}
var greet = function(greeting, person) {
	console.log(greeting + ", " + person + ", " + arguments[2] + "!")
}

greet("Hail", "Stanford", "Hail");
{% endhighlight %}

In fact, it is possible to dispense with parameter variables entirely, and simply rely on `arguments`:


{% highlight js %}
var greet = function(greeting, person) {
	console.log(arguments[0] + ", " + arguments[1] + ", " + arguments[2] + "!")
}

greet("Hail", "Stanford", "Hail");
{% endhighlight %}

This can be generalized to any number of arguments:

{% highlight js %}
var greet = function() {
	var line = "";
	for (var i = 0; i < arguments.length; i++) {
		if (i > 0) line += ", ";
		line += arguments[i];
	}
	line += "!";
	console.log(line);
}

greet("Hail", "Stanford", "Hail");
{% endhighlight %}

When a function is happy with different numbers of parameters, it is said to be *variadic*. Variadic function are very common, and can be found in the standard JavaScript library. For instance, `Math.max` and `Math.min` are functions that return the largest argument and smallest argument respectively.

{% highlight js %}
console.log(Math.max(1, 2));
console.log(Math.max(3, 4, 5));

console.log(Math.min(1, 2));
console.log(Math.min(3, 4, 5));
{% endhighlight %}

Optional Parameters
-------------------

C++ and Java both have support for optional parameters. A function with optional parameters can be called with less than the maximum number of parameters. If there are missing parameters, they are filled in using default values.

Functions with optional parameters are a special case of variadic functions. If a function has arguments that can be left out, this means that it supports different numbers of arguments, and is thus variadic.

JavaScript does not have built-in support for optional parameters, but it is easy to manually implement optional parameters. We simply check if there are missing parameters, and fill them in if necessary. This technique is used very commonly in library functions, as it gives the user more configurable options, but does not require the user to fill in unused configuration options.

In the example, the `helloWorld` function has a single optional `lang` parameter. The default value of `lang` is English, so if the parameter is not filled in, the function prints the message in English. If the parameter is filled in, then the function prints the message in the given language.

{% highlight js %}
var helloWorld = function(lang) {
	if (typeof lang === "undefined") lang = "English";
	switch(lang) {
		case "English":
			console.log("Hello!")
			return;
		case "Chinese":
			console.log("你好!");
			return;
	}
}

helloWorld();
helloWorld("Chinese")
{% endhighlight %}

An example of optional parameters from the standard JavaScript library is the string `substr` method. The method takes as parameters a character index and a length. It returns the substring that starts at that index and contains that number of characters. However, if the length parameter is omitted, `substr` returns the substring until the end of the string.

{% highlight js %}
var str = "Quick brown fox";

console.log("With two arguments:");
console.log(str.substr(6, 5));

console.log("With one argument:");
console.log(str.substr(6));
{% endhighlight %}

Anonymous Functions
-------------------

Anonymous functions, also known as lambda functions, are functions that do not have a name. They are usually transient functions that are either passed into or return from another function. They are useful because they allow to to write code more concisely. It allows you to write a function inline with its usage, rather than defining it elsewhere.

We've actually already seen anonymous functions in the function definition syntax we've been using all along:

{% highlight js %}
var helloFn = function() {
	console.log("Hello!");
}
{% endhighlight %}

This syntax literally means, "Create an anonymous function that prints 'Hello', and assign it to a value `helloFn`". The right hand side of that expression is a *function literal*. It is a literal value just like a number or a string. Because it does not yet have a name, it is also called an anonymous function. Let's try to isolate the function.

{% highlight js %}
function() {
	console.log("Hello!");
}
{% endhighlight %}

That gave us a syntax error. Let's try again.

{% highlight js %}
(function() {
	console.log("Hello!");
})
{% endhighlight %}

Notice that the isolated anonymous function has to be wrapped in an extra set of brackets for its protection. Just kidding. The brackets need to be there if the line starts with the `function` keyword, otherwise JavaScript returns an syntax error. Normally, you can use the literal without the brackets.

What can we do with the function? We can run it immediately:

{% highlight js %}
(function() {
	console.log("Hello!");
})()
{% endhighlight %}

The brackets at the end invokes the anonymous function. This code has the effect of creating a function, and immediately calling it. (This usage may seem silly now, but we will later see that it is a way of doing *global abatement*. You can wrap this structure around a piece of code to turn its global variables into closure variables.

The most common use of anonymous functions is as callback functions. Some functions are capable of taking other functions as parameters. These parameters are called callback functions. For instance, the `window.setTimeout` function takes a function and a number. It waits that number of milliseconds, and then calls that function.

{% highlight js %}
var helloFn = function() {
	console.log("Hello!");
}

// Call helloFn after one second
window.setTimeout(helloFn, 1000); 
{% endhighlight %}

Since we only used helloFn once, we might as well replace it with an anonymous function. By using this anonymous function, we can write the above program in a single line:

{% highlight js %}
window.setTimeout(function() { console.log("Hello!") }, 1000); 
{% endhighlight %}

Here are some other things I can do with anonymous functions. I can assign it to an object property:

{% highlight js %}
// Assign anonymous function to properties
var dog = {"bark": function() { console.log("Woof!") } };
dog.bark();

// Alternate syntax
var cat = {}
cat.meow = function() { console.log("Meow!") }
cat.meow();
{% endhighlight %}

I can also return it from a function:

{% highlight js %}
var makeGreeting = function() {
    return function() {
        console.log("Hello!");
    };
};

var greeting = makeGreeting();
greeting();
{% endhighlight %}


We will see more of this later.

The `arguments` Object
----------------------

Earlier I mentioned that the `arguments` object is an array-like object. The arguments object can be indexed into, and has a length property. What happens if we try to use array methods with it?

{% highlight js %}
var sortArgs = function() {
	return arguments.sort();
}

sortArgs(2, 5, 9);
{% endhighlight %}

It turns out that `arguments` is not a real array, and attempts to use it like a real array will fail. If we want to use it like an array, we need to first convert it to one.

{% highlight js %}
var sortArgs = function() {
	var argumentsArr = Array.prototype.slice.call(arguments);
	return argumentsArr.sort();
}

sortArgs(2, 5, 9);
{% endhighlight %}

The expression `Array.prototype.slice.call(arguments)` converts arguments to an array. We will see how this works later. For now, just treat this as a magical incantation.

Named Parameters
----------------

In JavaScript, parameters are passed to the function in a sequence, and they are bound to the parameter variables in the same sequence. This works fine up to about six parameters. However, there are function that could require many more functions. If there are too many parameters, then the function call becomes very long and hard to read. Furthermore, users will have difficulties tracking the order of parameters, and may end up erroneously switching the order of parameters.

To make this concrete, suppose we wrote a `orderSandwich` function that allowed you place an online order for a sandwich. 

{% highlight js %}
var orderSandwich = function(size, bread, meat, cheese,
                             hasLettuce, hasTomatos, hasCucumbers,
                             hasOnions, hasPeppers) {
	// ...
}
{% endhighlight %}

The better solution is to allow the user to specify parameters in the following manner:

{% highlight js %}
var orderSandwich = function(options) {
	// ...
}
orderSandwich({
	size: "footlong",
	bread: "dutch crunch",
	meat: "turkey",
	cheese: true
})
{% endhighlight %}

The user explicitly names each of the parameters when specifying its value. This technique is called named parameters. Some languages such as Python have built-in support for named parameters, while JavaScript does not. The above example shows that the functionality of objects is sufficient to simulate named parameters, though this means that the syntax may seem a little odd due to the extra pair of braces. 

It is used very commonly in JavaScript plugin libraries that are highly configurable and thus have lots of parameters. For instance, CodeMirror, which is the plugin we use to make code examples editable in the browser, has a function `CodeMirror` that has the following the named parameters:

> `value`, `mode`, `theme`, `indentUnit`, `smartIndent`, `tabSize`, `indentWithTabs`, `electricChars`, `rtlMoveVisually`, `keyMap`, `extraKeys`, `lineWrapping`, `lineNumbers`, `firstLineNumber`, `lineNumberFormatter`, `gutters`, `fixedGutter`, `readOnly`, `showCursorWhenSelecting`, `undoDepth`, `tabindex`, `autofocus`

This would get really unwieldy without named parameters.

Duck Typing
-----------

Like variables, JavaScript functions do not have types in their declarations. Therefore no type-checking is performed. Arguments are not type-checked, though it is possible to do the type-checking youself using the typeof operator. However, use duck typing if possible.

For instance, the following is a method that will work on both strings and arrays. If the argument is a string, it will return the first letter of the string. If the argument is an array, it will return the first element of the array.

{% highlight js %}
var first = function(input) {
	return input[0];
}
{% endhighlight %}

Return values are also not type-checked. It is possible for a function to return a number under some conditions and a string under other conditions, but this is considered very bad style. Note that if a function exits without the return keyword, or uses the return keyword by itself, the function will implicitly return `undefined`.

Function Overloading
--------------------

The JavaScript standard library contains a number of overloaded functions. For instance, the string method `split` can accept either a string or a regular expression as a single expression.

{% highlight js %}
var str = "1 2 3 4";

console.log("With string argument:")
console.log(str.split(" "));

console.log("With regular expression argument:")
console.log(str.split(/\s/));
{% endhighlight %}

You can implement this by using the typeof operator to check the type of the input.

{% highlight js %}
var myFn = function(input) {
	if (typeof input === "string") {
		console.log("The input was a string.");
	} else if (typeof input === "number") {
		console.log("The input was a number.");
	}
}
myFn("hi");
myFn(42);
{% endhighlight %}
