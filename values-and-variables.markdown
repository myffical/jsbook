---
layout: slides
categories: slides
title: Data and Variables
---

Data and Variables
==================

Numbers
-------
JavaScript has a number of data primitives, and the first we will look at is the number. Most languages have separate types for integers and floating point numbers. JavaScript has a single type for both integers and floating point numbers. In particular, it uses double-precision floating point numbers.

{% highlight js %}
console.log(1 + 2);  // 3
console.log(3 - 4);  // 1
console.log(5 * 6);  // 30
console.log(7 / 8);  // 0.875
{% endhighlight %}

The advantage of this arrangement is that we do not need to worry about having to differentiate between integer and floating point mathematics. Normally, one would have to be careful when doing division. For instance, `1 / 2` evaluates `0` in C++ and Java, due to integer rounding, but in JavaScript it revaluates to `0.5`.

There are three special floating point numbers, `Infinity`, `-Infinity`, and `NaN`. These values are used to signal that something strange has happened during computation, such as a division by zero or an overflow.

{% highlight js %}
console.log(1 / 0);   // Infinity
console.log(-1 / 0);  // -Infinity
console.log(0 / 0);   // NaN
{% endhighlight %}

You can refer to these three special values by name:

{% highlight js %}
console.log(Infinity);
console.log(-Infinity);
console.log(NaN);
{% endhighlight %}

The `parseInt` and `parseFloat` methods are very useful for converting strings to numbers. These functions will attempt to interpret a string as a number.

{% highlight js %}
console.log(parseInt("42", 10));
console.log(parseInt("137", 10));
console.log(parseFloat("0.1"));
console.log(parseFloat("1e-3"));
{% endhighlight %}

The second argument of `parseInt` is an optional argument that specifies the base of the integer. If the second argument is omitted, parseInt tries to determine the base of the string from the leading characters: if the string starts with "0x" or "0X", the radix is 16 (hexadecimal). If the string starts with "0", then the radix is 8 (octal) in older versions of JavaScript, but 10 (decimal) in newer versions of JavaScript. For this reason, it is recommended to *always* pass 10 as the second parameter.

{% highlight js %}
// This is 16
console.log(parseInt("0x10"));

// This could be 8 or 10
console.log(parseInt("010"));
{% endhighlight %}

The Math Library
----------------
The Math library contains lots of useful methods and constants for working with numbers.

Useful constants:

`Math.E`
:Euler's constant and the base of natural logarithms, approximately 2.718.

`Math.PI`
:Ratio of the circumference of a circle to its diameter, approximately 3.14159.

{% highlight js %}
console.log(Math.E);
console.log(Math.PI);
{% endhighlight %}

Rounding functions:

`Math.ceil`
:Returns the smallest integer greater than or equal to a number.

`Math.floor`
:Returns the largest integer less than or equal to a number.

`Math.round`
:Returns the value of a number rounded to the nearest integer.

{% highlight js %}
console.log(Math.ceil(1.1));   // 2
console.log(Math.floor(1.1));  // 1
console.log(Math.round(1.1));  // 1
{% endhighlight %}

Trigonometric functions (all angles are in radians, not degrees):

`Math.cos`
:Returns the cosine of a number.

`Math.sin`
:Returns the sine of a number.

`Math.tan`
:Returns the tangent of a number.

`Math.acos`
:Returns the arccosine of a number.

`Math.asin`
:Returns the arcsine of a number.

`Math.atan`
:Returns the arctangent of a number.

{% highlight js %}
// Math.PI / 3 is 60 degrees.

console.log(Math.sin(Math.PI / 3));
console.log(Math.cos(Math.PI / 3));
console.log(Math.tan(Math.PI / 3));

console.log(Math.asin(0.866));
console.log(Math.acos(0.500));
console.log(Math.atan(1.732));

{% endhighlight %}

Power, exponential and logarithm functions

Math.exp
:Returns Enumber, where number is the argument, and E is Euler's constant (2.718...), the base of the natural logarithm.

Math.log
:Returns the natural logarithm (loge, also ln) of a number.

Math.pow
:Returns base to the exponent power, that is, baseexponent.

Math.sqrt
:Returns the positive square root of a number.

{% highlight js %}
console.log(Math.exp(1));       // Exp of 1
console.log(Math.log(Math.E));  // Log of e
console.log(Math.pow(3, 2));    // Square of 3
console.log(Math.sqrt(9));      // Square root of 9
{% endhighlight %}

Strings
-------
A string is a sequence of characters. Strings represent textual data. Strings are immutable and cannot be modified, though new strings can be created out of old ones.

String values can be specified using single quotes `''` or double quotes `""`. There is no functional difference between single and double quotes. 

{% highlight js %}
console.log("I am a string!");
console.log('So am I!');
{% endhighlight %}

Strings can be treated as arrays of characters. The square bracket `[]` notation retrieves the character at the specified position as a string.

{% highlight js %}
console.log("Hello world!"[0]);
{% endhighlight %}

Strings can be concatenated using the `+` operator. Strings can be concantenated with other non-string values, which will be first converted to strings.

{% highlight js %}
console.log("Hello" + "Dave");
console.log("The answer to Life, The Universe and Everything is " + 42);
{% endhighlight %}

JavaScript does not have a multi-line string literal notation. If a string is long enough that it needs to wrap over multiple lines, one way to handle it is to split it into multiple smaller strings and use the concatenation operator to reassemble them into the original string.

{% highlight js %}
var gettysburgAddress =
	"Four score and seven years ago our fathers brought forth on this " +
	"continent, a new nation, conceived in Liberty, and dedicated to the " +
	"proposition that all men are created equal.\n" +
	"\n" +
	"Now we are engaged in a great civil war, testing whether that nation," +
	"or any nation so conceived and so dedicated, can long endure. We are " +
	"met on a great battle-field of that war. We have come to dedicate a " +
	"portion of that field, as a final resting place for those who here " +
	"gave their lives that that nation might live. It is altogether fitting " +
	"and proper that we should do this.\n"

console.log(gettysburgAddress);
{% endhighlight %}

The length of a string can be obtained by getting the value of the `length` property.

Substrings search methods:

`contains`
Determines whether one string may be found within another string.

`indexOf`
Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.

`lastIndexOf`
Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.

Case conversion methods:

`toLowerCase`
:Returns the calling string value converted to lower case.

`toUpperCase`
:Returns the calling string value converted to uppercase.

{% highlight js %}
console.log("I'm in lowercase".toLowerCase());
console.log("I'm in uppercase".toUpperCase());
{% endhighlight %}

Substring methods:

`slice`
:Extracts a section of a string and returns a new string.

`split`
:Splits a String object into an array of strings by separating the string into substrings.

`substr`
:Returns the characters in a string beginning at the specified location through the specified number of characters.

`substring`
:Returns the characters in a string between two indexes into the string.

{% highlight js %}
console.log("one two three four".split()[0]);
console.log("H")

{% endhighlight %}

`undefined` and `null`
----------------------
JavaScript has variables that are analogous to Java's `null` and C++'s `NULL`. Unusually, JavaScript has two seperate values that could represent nothing.

`undefined` is a variable type that has only one value, also called `undefined`. It usually indicates the absence of a value or an error condition. There are many ways to get an undefined value. For instance, if we declare a variable with `var`, but do not set an initial value, its initial value will be set to `undefined`.

{% highlight js %}
var myVar;
console.log(myVar);
console.log(typeof myVar);
{% endhighlight %}

If a variable name is undeclared, the `typeof` operator will report that the variable is of type "undefined". However, attempting to actually use it in any other way, such as trying to compare it with `undefined` results in a `ReferenceError`. The `typeof` operator is the preferred way to check if a variable is defined.

{% highlight js %}
var myVar;
console.log(myVar);
console.log(typeof myVar);
{% endhighlight %}

Later we will see three more ways of getting an undefined value. `undefined` is also the value of any unset object properties, any unset function arguments, and the return value of a function without an explicit value.

{% highlight js %}
var myObj = {};
console.log(myObj.myProperty);
console.log(typeof myObj.myProperty);

var myFn = function(myArg) {
	console.log(myArg);
	console.log(typeof myArg);
}

myFn();
{% endhighlight %}

We can also used `undefined` as a literal value. However, you will always never want to do this. If you are checking if a variable is undefined, use `typeof` instead. If you are returning a nothing value from a function, use `null` instead.

{% highlight js %}
var myVar = undefined;
console.log(myVar);
console.log(typeof myVar);
{% endhighlight %}

In earlier version of JavaScript, it was possible to define a variable called `undefined`. This would cause any subsequent attempts to use the `undefined` literal to instead use this variable, which was cause for confusion and programmer errors. Fortunately, this was fixed in JavaScript 1.8.5.

`null` is a value of type `object`. Objects are covered in more detail later.

{% highlight js %}
var myVar = null;
console.log(myVar);
console.log(typeof myVar);
{% endhighlight %}

`null` is useful to indicate the absence of value at the application lavel. For instance, you might want to return `null` from a function to indicate that no input resulted or an error occurred. 

`undefined` can result from language-level behavior, whereas `null` only results from application level behavior.  If you're choosing between using `null` or `undefined` as an indicator value in your code, `null` is usually the better choice.

`undefined` and `null` are both falsey values. When converted to a boolean or used in a condition, they evaluate to `false`.

Booleans
--------
Booleans are a primitive type in JavaScript that consist of only two values, `true` and `false`.

{% highlight js %}
console.log(true);
console.log(false);
{% endhighlight %}

You can use a non-boolean value as a condition for `if` and `while` statements. If you do so, JavaScript will interprete the value as true or false by the following rules. The values `0`, `NaN`, `""` (the empty string), `null` and `undefined` all evaluate to false. All other values evaluate to true. In particular, `[]` (the empty array) and `{}` (the empty object) all evaluate to true, which may seem counter-intuitive.

Variables
---------
Variables allow you to save variables for further use and computation. Variables are declared with the `var` keyword. They can be declared and assigned an initial value on the same line. They can also be declared anywhere, so it is best to position the declaration as close as possible to the site of use.

Variables can also be declared without the var keyword. This is very bad because it also causes the variable to be declared with global scope. More on this later.

Attempting to use a variable without previously declaring it will cause a `ReferenceError`.

Control Structures
------------------
JavaScript inherits the same control structures from C++ and Java, as well as some of their quirks.

The `if` control structure takes a condition and a block. The block is executed if and only if the condition evaluates to true.

{% highlight js %}
var x = 2;
if (x % 2 == 0) {
	console.log("x is even");
}
{% endhighlight %}

More branches can be added using `else if` and `else`. An `else if` structure takes a condition and a block, and is executed if and only if the condition evaluates to true, and all the preceeding `if` and `else if` conditions were false. An `else` structure takes a block, which is executed if and only if all of the preceeding `if` and `else if` conditions evaluated to false. `else if` and `else` cannot be used in isolation.

{% highlight js %}
var x = 11;
if (x < 10) {
	console.log("x is less than 10.");
} else if (x >= 10 && x <= 20) {
	console.log("x is between 10 and 20.");
} else {
	console.log("x is more than 20.");
}
{% endhighlight %}

The `while` control structure takes a condition and a block. Upon reaching the control structure, the block is executed if an only if the condition evaluates to true. Upon reaching the end of the loop, the condition is re-evaluated, and the block is re-executed if and only if the condition evaluates to true.

{% highlight js %}
var numNyan = 10;
var i = 0;
while (i < numNyan) {
	console.log("nyan ")
	i++;
}
{% endhighlight %}

The `for` control structure takes three separate expressions and a block. The three expressions are the *initialization*, *condition* and *increment* expressions.

{% highlight js %}
var n = 3;
var d = 10;
console.log("First " + n + " multiples of " + d)
for (var i = 1; i <= n; i++) {
	console.log(i * d);
}
{% endhighlight %}

The above example could be rewritten using a `while` loop as follows.

{% highlight js %}
var n = 1;
switch (n) {
	case 1:
		console.log("Ichi");
		break;
	case 2:
		console.log("Ni");
		break;
	case 3:
		console.log("San");
		break;
}
{% endhighlight %}

One unfortunate carry-over from C++ and Java is the fall-through behavior of the switch statement. After jumping to the appropriate branch of the switch statement, JavaScrpit continues executing until it sees a `break` or `return` statement, or reaches the end of the block. Many novice programmers have been tripped up by this by forgetting to insert the `break` statement, causing code to be unintentionally executed.
