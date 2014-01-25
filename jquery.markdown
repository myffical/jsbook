---
layout: slides
categories: slides
title: jQuery
---

jQuery
======

JavaScript Libraries
--------------------

JavaScript libraries are libraries that makes many tasks easier for you, especially tasks in client-side programming. There are many JavaScript libraries that are commonly used:

- jQuery
- Prototype
- Dojo
- MooTools

At time of writing, jQuery is the most commonly used JavaScript library, so the following examples will all use jQuery. If you find yourself working with a different library in the future, you will find that the API might be different, but most of the principles will be the same.

Benefits of Libraries
---------------------

Cross-browser compatibility in native JavaScript is fairly poor. Although there is a standard DOM API, it is inconsistently implemented across browsers. If you want to support older browsers, you have to make your code reverse-compatible. You would have to check if a feature you are using is present, and if it is not, you would have to try an alternative approach. And supporting IE6 (which still has a browser share of 5%, at time of writing) is a nightmare.

JavaScript lets us deal with cross-browser compatibility more easily. The extra layer of abstraction allows us to focus on the design and delegate cross-browser compatibility to the library implementation. This lets us get rid of cross browser quirks.

The DOM API is not very expressive, and common operations take longer to write than they should. Code written using a JavaScript library is typically more concise and expressive than code operating on the raw DOM.

Principles of jQuery
--------------------

As the name suggests, jQuery is focused on queries. A query uses CSS selectors to get a set of elements in the document. We can then perform operations on all the selected elements at once.

The `$` variable
----------------

When you include the jQuery script, it exports a single object into the global namespace. The object is sensibly named `jQuery`. For convenience, jQuery also aliases the variable `$` to the same object. Because the jQuery variable is so frequently used, the `$` variable is more commonly used, as it is shorter and easier to type.

`$` is a function object, which means that it can be called as a function, but it also has a number of properties (mostly methods) that can perform other useful things.

`$` is a heavily overloaded function. It takes a single argument, and always returns a jQuery collection. Depending on the type of the argument, it can do four different things:

- If the argument is a CSS selector, it returns a jQuery collection of DOM elements that match the selector.
- If the argument is a HTML string, it creates a new DOM element from the HTML string, and returns it as a jQuery jQuery collection.
- If the argument is a DOM element, it returns the DOM element as a jQuery collection.
- If the argument is absent, it returns an empty jQuery collection.
- If the argument is a jQuery collection, it returns the jQuery collection unchanged. Therefore calling `$` on the output of `$` is a no-op.

Selection
---------

Earlier on, we showed that we could select elements in the DOM using functions such as `document.getElementById()`. jQuery makes this much simpler by giving us an easier selector syntax. Suppose we had a `<div>` element with its `id` attribute set to "hello". The following example shows how to select it using the DOM and using jQuery.

{% highlight js %}
var domMan = document.getElementById("hello");
var jqMan = $("#hello");
{% endhighlight %}

Here, `$` is a query function. We pass it a selector string that tells jQuery which elements we want to find.

Notice that we used the `#` symbol to indicate that the string is an `id`. This looks like a lot like CSS selectors. In fact, the `$` function can take any CSS selector. For instance, if we wished to select all elements of class `my_class`, we would use the selector string ".my_class". Here are other common selectors.

All Selector ("\*")
:Selects all elements.

Class Selector (".class")
:Selects all elements with the given class.

Element Selector ("element")
:Selects all elements with the given tag name.

ID Selector ("#id")
:Selects a single element with the given id attribute.

Multiple Selector ("selector1, selector2, selectorN")
:Selects the combined results of all the specified selectors.

Descendant Selector ("ancestor descendant")
:Selects all elements that are descendants of a given ancestor.

Wrapping and Unwrapping DOM Elements
------------------------------------

Recall that we can call the `$()` method on a single element in order to get a selection of one object. We can also select a single element using `document.getElementbyId`.

{% highlight js %}
var jqElem = $("#egg");
var domElem = document.getElementById("egg");
{% endhighlight %}

Both `jqElem` and `domElem` refer to a single element, but they don't work in the same way. This is because these two objects are different kinds of objects. `domElem`
is a raw DOM element object, whereas `jqElem` is a jQuery object. You can see this by looking at the available methods: `jqElem` only has methods available to jQuery objects, and `domElem` only has methods available to DOM elements. A jQuery object behaves like a wrapper around the underlying DOM objects. It provides you with new methods, and it executes the methods by performing actions on the underlying DOM object. In the process, it hides the native DOM methods and properties, so if you want to use those, you would have to unwrap the jQuery object first to get the underlying DOM element.

Here's how we turn a DOM element into a jQuery element:
	
{% highlight js %}
var domElem = document.getElementById("egg");
var jqElem = $(domElem);
{% endhighlight %}

Here's how we turn a jQuery element into a DOM element:

{% highlight js %}
var jqElem = $("#egg");
var domElem = jqElem[0];
// Alternatively:
var domElem = jqElem.get(0);
{% endhighlight %}

jQuery Collections
------------------

The output of invoking `$` is always is a jQuery collection. A jQuery selection is a collection of DOM elements. A collection can be empty: for instance, invoking `$("")` gives you an empty collection. It can have a single element, as we saw with ID queries. It can have more than one element, as we saw with class queries.

A jQuery collection is like an array. The number of elements selected is given by the `length` property of the collection. There are two methods, `.eq` and `.get`, that allow you to index into a jQuery collection, but they are subtly different. The  methods both return an item from the collection, but they are subtly different. The key difference the type of the return value. `.eq` returns the element as a jQuery object i.e. a jQuery collection of length 1. `.get` returns the element as a raw DOM element.

You can also index into a jQuery collection using the `[]` square brackets. This has the same effect as `get`, that is, it returns the raw DOM element at that index. This has a tendency to trip people up.

Set Operations
--------------

jQuery collections can be thought of as sets. We can use the perform usual set operations on jQuery sets too: union, intersection, and difference.

The union operation is performed using the `add` method.

{% highlight js %}
var fruits = $(".apples").add(".oranges")
{% endhighlight %}

The intersection operation is performed using the filter method.

{% highlight js %}
var ripeApples = $(".apples").filter(".ripe")
{% endhighlight %}

The difference operation is performed using the `not` method.

{% highlight js %}
var unripeApples = $(".apples").not(".ripe")
{% endhighlight %}

Note that CSS selector syntax already supports unions and intersections. If multiple selectors are chained with comms, the resulting set is the union of those selectors. If multiple selectors are concatenated, the resulting set is the intersection of those selectors.

{% highlight js %}
var fruits = $(".apples, .oranges")
var ripeApples = $(".apples.ripe")
{% endhighlight %}

Manipulating Elements
---------------------

jQuery objects are somewhat different from raw DOM objects. jQuery are raw DOM objects wrapped with a layer that provides us with new methods to work with those objects. These methods are usually much easier to use than the native DOM methods.

The `attr` method allows us to get and set HTML attributes. When called with an attribute name, the `attr` method gets the current value of that attribute.

When called with an attribute name and a new value, the `attr` method sets that attribute to the given value. When called with a map of attribute names and new values, the `attr` method sets each attribute to the corresponding new value.

The `css` method allows us to get and set CSS styles. Its usage is identical to the usage of attr. When called with a CSS property name, the `css` method gets the current value of that CSS property. It does so by inspecting the `style` attribute on the element. Note that it is unable to obtain the style of the element as defined in the CSS stylesheet.

When called with a CSS property name and a new value, the `css` method sets that style to the given value. When called with a map of CSS properties and new values, the `css` method sets each CSS property to the corresponding new value. These properties are set by modifying the `style` attribute on the element. The CSS stylesheets will remain unchanged.

Often, we want to change many styles on an element at once. For instance, if we were building a custom toggle button, we might want to have a set of styles for selected buttons, and a different set of styles for an unselected button. Rather than using the `css` method to set up all of the styles, it is easier to define the styles as a class style in a CSS stylesheet, and then apply the appropriate classes to the elements.

The `addClass` and `removeClass` methods enable us to do this. Both methods take a single argument, which should be string of classes to be added or removed. Multiple classes should be separated by spaces.

We often want to control if elements on a page are visible or invisible. For instance, if we were building a tooltip help widget, we could create HTML elements corresponding to each . The easiest way to do this is to set the CSS property `display` to `none` when the element is to be hidden, and to the original value, either `block` or `inline`, when the element is to be displayed. This is such a common idiom that jQuery provides helper methods to do this.

The `hide` and `show` methods hide or show an element respectively. They work by modifying the `display` property inline CSS in the manner described above.

Finally, the `val` method allows us to get or set the values of form elements.

Modifying Contents
------------------

There are two main ways to modify the contents of a page. The first is using the `html` method. The second is using the `text` method. In both cases, if a value is specified, then the function is a setter, and the HTML or text content is set to the value. If no value is specified, then the function is a getter and returns the current HTML or text content.

The main difference between the two is that `html` will insert the given string as HTML, whereas `text` will escape it first.

{% highlight js %}
var $(".elem").html("<b>Hello world!</b>")
var $(".elem").text("<b>Hello world!</b>")
{% endhighlight %}

Moving Elements
---------------

The following methods allow you to take an element and move it around the DOM tree.

The `append` method takes a single argument adds the argument as the last child of the jQuery collection. The argument can be any argument that can be used with the `$` function.

The `prepend` method does the same thing, but adds it as the first child of the jQuery collection.

The `after` method takes a single argument and places the object immediately before the jQuery collection as a sibling.

The `before` does the same thing, but adds it immediately before the jQuery collection as a sibling.

The interface to these four methods expect that the object to be placed is the argument, and the collection to be used as the target is the receiver. There are also alternative methods that swap the argument and receiver. For these methods, the object to be placed is the receiver, and the target is the argument. These four methods are `prependTo`, `prependTo`, `insertAfter` and `insertBefore` respectively.

Adding and Removing Elements
----------------------------
We can create an element by passing the HTML for the element to the `$` function. The HTML element can be more complicated than just a bare tag: have attributes or child elements. The restriction is that the top level of the string must be a single HTML element, with no naked text outside. This creates the element as a jQuery object. Note that this does not insert the element into the document: you still need to insert it into the document using one of the jQuery methods for moving elements.

Observe that `$` has more than one behavior, and its behavior depends on the type of input it receives. This is an example of function overloading, which we've seen earlier.

To remove an element from the DOM, we can use the `remove` method. This removes an element from the document, but does not immediately destroy it. You can re-insert the element back into the document later. 

