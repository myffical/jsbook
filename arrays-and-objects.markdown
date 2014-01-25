---
layout: slides
categories: slides
title: Arrays and Objects
---

Arrays and Objects
==================

Compound Datatypes
------------------

Numbers, booleans and strings are the primitive datatypes in JavaScript. JavaScript also allows us to compose these datatypes into compound datatypes, such as arrays and objects. Both array and objects are ways of grouping pieces of data together into meaningful collections.

Arrays
------

An array is an ordered sequence of items. An array is created using square brackets `[]`.

{% highlight js %}
var myArr = [];
{% endhighlight %}

This syntax also allows us to initialize the contents of the array.

{% highlight js %}
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                  "Saturday", "Sunday"];
{% endhighlight %}

You can get and set members of an array using the square bracket notation. JavaScript arrays are zero-indexed. For example, `myArr[0]` is the first element of `myArr`.

{% highlight js %}
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                  "Saturday", "Sunday"];

console.log(daysOfWeek[0]);
daysOfWeek[0] = "Mon";
{% endhighlight %}

JavaScript arrays do not perform bounds checking. If you ask for an element with an index . If an array has 7 elements, it is okay to get or set the 8th element. If you try to get an element past the end of the array, the value of the element will be `undefined`. 

{% highlight js %}
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                  "Saturday", "Sunday"];
console.log("The value of the 8th day is: " + daysOfWeek[7]);
{% endhighlight %}

If you try to set an element past the end of the array, the array will be extended to the required length.

{% highlight js %}
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                  "Saturday", "Sunday"];
daysOfWeek[7] = "The extra day of the week that everyone wishes they had";
console.log("The value of the 8th day is: " + daysOfWeek[7]);
{% endhighlight %}

In fact, you can set an element far off the end of the array, and the elements in between will get filled with `undefined`.

{% highlight js %}
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                  "Saturday", "Sunday"];
daysOfWeek[10] = "Ten Day"
console.log(daysOfWeek)
{% endhighlight %}

The elements of an array do not have to be of the same type. You can create arrays with heterogenous types.

{% highlight js %}
var daysOfWeek = ["The Answer to Life, Universe and Everything", 42];
{% endhighlight %}

You can even create arrays of arrays, also known as multidimensional arrays. Unfortunately, there is no shorthand for creating these arrays: you have to initialize the child arrays by hand, using a loop if necessary. Also, the multidimensional array need not be rectangular: each row can have a different number of elements.

{% highlight js %}
var ticTacToe= [
	["X", "O", "X"],
	[" ", "O", " "],
	[" ", " ", "X"],
];
{% endhighlight %}

If you wish to loop over an array, the common idiom is to use a `for` loop.

{% highlight js %}
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                  "Saturday", "Sunday"];
for (var i = 0; i < daysOfWeek.length; i++) {
	console.log(daysOfWeek[i]);
}
{% endhighlight %}

In JavaScript 1.6, arrays get a forEach function. This is rarely used because it is not compatible with older browsers (e.g. IE6).

{% highlight js %}
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                  "Saturday", "Sunday"];
daysOfWeek.forEach(function(x) { console.log(x) });
{% endhighlight %}

Array Methods
-------------

List insertion and removal:

pop
: Removes the last element from an array and returns that element.

push
: Adds one or more elements to the end of an array and returns the new length of the array.

shift
:Removes the first element from an array and returns that element.

unshift
:Adds one or more elements to the front of an array and returns the new length of the array.

{% highlight js %}
var arr = [1, 2, 3];
console.log(arr.pop());

console.log(arr);
console.log(arr);

arr.shift();
arr.unshift(4);
{% endhighlight %}

Reordering elements:

reverse
:Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first.

sort
:Sorts the elements of an array.

{% highlight js %}
var primes = [5, 3, 7, 11, 2]

console.log("Unsorted:");
console.log(primes);

console.log("Sorted:");
primes.sort()
console.log(primes);

console.log("Sorted and reversed:");
primes.reverse()
console.log(primes);
{% endhighlight %}

concat
:Returns a new array comprised of this array joined with other array(s) and/or value(s).

join
:Joins all elements of an array into a string.

{% highlight js %}
var arr = [1, 2, 3]
{% endhighlight %}

splice
:Adds and/or removes elements from an array.

slice
:Extracts a section of an array and returns a new array.

{% highlight js %}

{% endhighlight %}

Object-oriented programming
---------------------------

JavaScript supports object-oriented programming (OOP). OOP is heavily used in popular languages such as Java and C++. JavaScript supports most of the same OOP features, but it differs in several key features.

Object-oriented programming is a paradigm of programming that views a program as a collection of entities called *objects*. An object consists of data fields, which may be private to the outside world. These data fields are known as *instance variables* or *properties*. It also has a number of actions that it knows how to perform. These actions are usually called *methods*.

In a program, there may be many objects that behave similarly to one another. For instance, in an bank accounting program, we might model accounts using objects. Each back customer would have their own account object, which all behave similarly, but have different balances and account histories. but we say that the objects have the same *type* or *class*, and that these objects are *instances* of that class.

JavaScript differs from other OOP languages such as Java and C++ in that it has no classes. You can create an object that does not have a class per se. We will see later that there are other mechanisms that replace the usual class and inheritence systems.

Creating Objects
----------------

An empty object can be created using the `{}` syntax.

{% highlight js %}
var student = {};
console.log(student);
{% endhighlight %}

You can also initialize properties of the object with the `{}` syntax. The names of properties are always strings. The values of properties can be any type.

{% highlight js %}
var student = {
	"name": "Jane Doe",
	"class": 2015
};
{% endhighlight %}

You might have noticed that all our data members are public. If we were writing this in C++ or Java, we would make our data members private, and expose them using getter and setter methods. The fact that all our properties are automatically public might make you uncomfortable. This is an unfortunate consequence of the objects work: it makes it really easy to work with objects, with the cost of sacrificing encapsulation. (Later on, we will see that a mechanism called closures allows us to simulate private instance variables.)

Getting and Setting Properties
------------------------------

To access a property of an object, we use the dot notation. For instance, `ninja.weapon` refers to the `weapon` property of the `ninja` object.

{% highlight js %}
var student = {
	"name": "Jane Doe",
	"class": 2015
};

console.log('Name:', student.name);
console.log('Class:', student.class);
{% endhighlight %}

We can also use this notation to set properties using the assignment `=` operator. This modifies a property if it already exists, or creates a new property if it did not exist.

{% highlight js %}
var student = {
	"name": "Jane Doe",
	"class": 2015
};

student.class = 2014
student 

console.log('Name:', student.name);
console.log('Class:', student.class);
{% endhighlight %}
Another way to access a property is to use the square bracket notation. The square bracket notation takes a property name as a string, and then returns the value of the requested property.

{% highlight js %}
var ninja = {
	weapon: 'katana',
	skill: 'stealth'
};

console.log('Weapon:', student["weapon"]);
console.log('Skill:', student["skill"]);
{% endhighlight %}

The square bracket notation allows us to request and look up properties at run time.  However, if we know beforehand what property we want to look up, dot notation is preferred to square bracket notation, as it is less error prone.

A common mistake is to omit the quotes around the keys. In the example below, we wrote `student[name]` when we meant `student['name']`.

{% highlight js %}
var student = {
	"name": "Jane Doe",
	"class": 2015
};

console.log('Name:', student[name]);
{% endhighlight %}

Interestingly, looking up a non-existent property in an object is not an error. Attempting to do so just results in an `undefined` value.

{% highlight js %}
var ninja = {
	weapon: 'katana',
	skill: 'stealth'
};

console.log(student.email);  // Not an error
console.log(student.["email"]);  // Not an error
{% endhighlight %}

JavaScript does not have a true foreach. But we can simulate one like so.

{% highlight js %}
var student = {
	"name": "Jane Doe",
	"class": 2015
};

for (key in student) {
	if (student.hasOwnProperty(key)) {
		console.log(key + ": " + student[key]);
	}
}
{% endhighlight %}

The hasOwnProperty method ensures that we don't get keys from further up the prototype chain (this is discussed later). The order in which keys are returned is undefined.

Modifying Properties
--------------------

To modify a property, we just use the `=` operator to assign a value to it. The syntax is identical to how we get the property. We can use dot notation.

{% highlight js %}
var ninja = {};
ninja.skill = "stealth";
ninja.weapon = "katana";
{% endhighlight %}

Or we can use square bracket notation.

{% highlight js %}
var ninja = {};
ninja["skill"] = "stealth";
ninja["weapon"] = "katana";
{% endhighlight %}


Everything Is An Object
-----------------------

In JavaScript, everything (except `null` or `undefined`) is an object. This means that we can use the dot notation to call methods on everything:

{% highlight js %}
console.log(true.toString());
console.log("Hello world!".toString());
console.log([1, 2, 3].toString());
console.log({"hi": "there"}.toString());
{% endhighlight %}

Numbers and functions are a bit trickier.

{% highlight js %}
console.log(0.toString());
console.log(function() {}.toString());
{% endhighlight %}

JavaScript considers both of those to be syntax errors. This is because it interprets the `.` in the first line as a decimal point, and the `{}` in the second line as an object. The solution to this is to wrap the number and function in brackets, and the code will work as expected.

{% highlight js %}
console.log((0).toString());
console.log((function() {}).toString());
{% endhighlight %}

Primitive Wrappers
------------------

Almost everything is an object, except primitives. The primitive types are: number, string, boolean, null and undefined. However, it would be nice if you could use object-style syntax on everything without having to worry about if it were an object, so you can do that:


You can use dot-notation on primitives too. There is a special case for numbers: since dot can also represent a decimal point, we need to surround a number with a dot.

{% highlight js %}
console.log("Hey Jude".indexOf("Jude"));
console.log((42).toString());
{% endhighlight %}

If you've learned Java, you might remember that that each primitive type has a corresponding object type that wraps around the primitive type. (e.g. `int` and `Integer`).

In fact, JavaScript does something very similar. It temporarily boxes the primitive into an object, runs the statement, and unboxes the primitive afterwards. The object is transient, and you normally never get to see it. This means that if you try to set a property on an object, it does not persist.

{% highlight js %}
var myNum = 42;
myNum.answerTo = "Life, The Universe and Everything";
console.log(myNum.answerTo);
{% endhighlight %}

The Global Object
-----------------

Global variables appear as properties in the `window` object.

{% highlight js %}
EARTH_GRAVITY = 9.807
MOON_GRAVITY = 1.622
MARS_GRAVITY = 3.711
console.log(window.EARTH_GRAVITY);
console.log(window.MOON_GRAVITY);
console.log(window.MARS_GRAVITY);
{% endhighlight %}

Likewise, properties in the `window` object appear as global variables.

{% highlight js %}
window.EARTH_GRAVITY = 9.807
window.MOON_GRAVITY = 1.622
window.MARS_GRAVITY = 3.711
console.log(EARTH_GRAVITY);
console.log(MOON_GRAVITY);
console.log(MARS_GRAVITY);
{% endhighlight %}

References
----------

Like Java, every non-primitive variable in JavaScript is actually a reference (or pointer) to a the object, which resides somewhere in heap memory. When assigning a non-primitive variable to another variable, the assignment is done by copying the reference.

{% highlight js %}
var myArr1 = [1, 2, 3];
var myArr2 = myArr1;
myArr2.push(4);
console.log(myArr1);
{% endhighlight %}

In this example, we create a new array, `myArr1`. We then assign this array to `myArr2`. This assignment causes the reference to be copied to `myArr2`. Thus, a modification to `myArr2` is reflected in `myArr1`, as both variables refer to the same array.

Reference copying means that different variables in different places can refer to the same object. Since variables are names, The act of giving an object a new name is called *aliasing*.

This also means we can create data structures by wiring up references between different objects. We can even have circularity in our data structures. Here's an example of a circular linked list:

{% highlight js %}
var link1 = {val: "1", next: null};
var link2 = {val: "1", next: null};
var link3 = {val: "1", next: null};
link1.next = link2;
link2.next = link3;
link3.next = link1;
console.log(link1.next.next.next.val);
{% endhighlight %}

JavaScript is a high-level language, and (like Java) does not provide facilities for managing memory directly, such as pointers. Instead of requiring programmers to manually allocate and free memory, JavaScript automatically allocates memory for new objects, and uses a garbage collector to free memory when it is no longer needed.

Dynamic typing
--------------

Variables in JavaScript are declared without a type. In fact, we can assign a number to a variable, and then later assign a string to the same variable.

{% highlight js %}
var myStuff;
myStuff = 1;
myStuff = "hi";
myStuff = null;
myStuff = [];
myStuff = {};
{% endhighlight %}

In some cases, this saves us keystrokes and allows for polymorphism (the variable can be whatever type is appropriate at the time), but also makes it very difficult to reason about types. It is not possible to infer what the type of variable is, just by inspecting the code.

JavaScript has weak typing, in that it freely coerces variables to whatever type seem appropriate. If we use the `+` operator with a string, the other object gets converted to a string first. The order of the operands does not matter.

{% highlight js %}
console.log("1" + 2);
console.log(1 + "2");
{% endhighlight %}

If we use the `*`, `/` and `-` operators with a number, the other object gets converted to a number.

{% highlight js %}
console.log("3" * 4);
console.log(3 * "4");
{% endhighlight %}

Here things get weird.

{% highlight js %}
console.log([] + {});
console.log({} + []);
console.log({} + []);
console.log({} + {});
{% endhighlight %}

Whenever possible, minimize the use of automatic casting.

For instance, the block of code below works if `duck` is a string or an array.

{% highlight js %}
var duck = "Donald Duck";
// var duck = ["Donald", "Duck"];

for (var i = 0; i < duck.length; i++) {
	console.log("Element #" + i + ": " + duck[i]);
}
{% endhighlight %}
