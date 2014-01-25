---
layout: slides
categories: slides
title: More jQuery
---

More jQuery
======

In this chapter, we look at some patterns on writing jQuery, and then we look at how to animate things.

`$(document).ready()`
---------------------

Earlier I mentioned that JavaScript programs do not need a `main` function i.e. an function that serves as the entry point when the program is run. That was a partial lie.

Within a HTML page, we can link to JavaScript files at any part of the source file. Say you put your JavaScript in the `<head></head>` section. (This used to be a common practice.) Say your script also has code that manipulates the DOM in some way. You fire up your page in your browser, and nothing happens. Why?

It turns out that the browser runs JavaScript as soon as it encounters it. If the script is placed before the `<body></body>` section, then the script will be run before the document's DOM is created. This means that any attempt to manipulate the non-existent DOM will ahve no effect.

The best way to fix this is to run the code only after the DOM has loaded. To do this, we use the special `$(document).ready()` event - the `ready` event of the `document` object This event fires when the DOM has been fully created, and signals to your program that you can start manipulating the DOM.

It is thus a common practice to put all your code into a function, and then 

The best way to fix this is to place all your code that affects the DOM into a function, and make the function

Chaining
--------

In jQuery, when you call a method on a collection, it usually returns the collection itself. This allows you to call a series of methods on a collection in succession. We call this pattern *chaining*.

{% highlight js %}
$(".elem").css("background", "yellow").attr("src", "some-url")  // etc.
{% endhighlight %}

Events
------
Earlier, we talked about adding and removing events using `addEventListener`. jQuery provides a cleaner interface for adding and removing event listeners. It also makes it easier to add and remove event listeners to older browsers that do not support `addEventListener`, such as IE6.

The jQuery version of `addEventListener` is called `bind`. This attaches an event handler to an event for a collection of elements. The receiver of `bind` should be a jQuery collection of targets. If the collection has more than one element, the same listener is bound to each element in the collection. The first parameter should be the name of the event as a string. The second parameter should be the callback function. For instance, here is how you bind an event handler to the click event on a button. This causes an alert box to be displayed when the button is clicked.

{% highlight js %}
$("#hello_btn").on("click", function() { alert("Hello world!" )} )
{% endhighlight %}

The jQuery version of `removeEventListener` is called `off`. This removes an event handler for an event for a collection of elements. The receiver and parameters for `off` are identical to those for `on`.

In older code, you might also see the methods `bind` and `unbind`. The methods operate similarly to `on` and `off` respectively, but are now deprecated and should be replaced with their new counterparts.

jQuery also defines shorthand methods for common events. For instance, the `click` method is a shorthand for binding an event listener to the `click` event. So `element.on("click", fn)` is equivalent to `element.onk(fn)`. The previous example could have been written more succinctly as:

{% highlight js %}
$("#hello_btn").click(function() { alert("Hello world!" )} )
{% endhighlight %}

Some other shorthand methods include `mousedown`, `mouseup`, `mousemove`, `keydown`, `keyup`, `change`, `focus`, `blur`, `submit`.

These shorthand methods also allow you to trigger events. For instance, if we call `click()` on an element with no parameters, it will trigger a click on that element. This means that all event listeners will be fired, and the default action, if any, will occur. Basically, this is equivalent to clicking the element yourself.

{% highlight js %}
$("#hello_btn").click(function() { alert("Hello world!" )} )
$("#hello_btn").click();
{% endhighlight %}

Showing and Hiding
------------------
Earlier, we showed that you can use css to style elements on the fly. A very common use of this functionality is to show and hide elements. We can hide elements by setting the `display` property to `none`, and we can show them by setting `display` to either `block` or `inline`.

This is such a common usage that there's a shorthand syntax.The `hide` method hides the element, and `show` un-hides it. Furthermore, the `toggle` method shows the element if it is hidden, and hides it if it shown.

Animations
----------
From a interface-design perspective, animations are great because they help the user figure out what is going on. For instance, if we hide an element by fading it out, the user can see which element is going away. Besides, animations look really cool.

We can implement our own animations using `setTimer` - this is an interesting exercise to try if you have the time. But jQuery has a number of animation functions that make life easier.

jQuery has a family of functions that show and hide elements using the fading function. They are called `fadeIn`, `fadeOut` and `fadeToggle`, and they correspond to `show`, `hide` and `toggle` respectively. `fadeIn` fades in a hidden element, `fadeOut` fades out a displayed element, and `fadeToggle` fades in a hidden element and fades out a shown element.

jQuery has a second family of functions that show and hide elements using the sliding function. They are called `slideIn`, `slideOut` and `slideToggle`, and they correspond to `show`, `hide` and `toggle` respectively. They work the same way as the fade animations, and are especially useful for building collapsable menus or content blocks.

jQuery stores the animations in an internal queue. We can call multiple animation methods on an element, but each animation will run only after the last has finished, instead of making a mess of trying to do everything at once. So if I were to call `$("#elem").fadeOut().fadeIn()`, the element would fade out first, and then fade in.
