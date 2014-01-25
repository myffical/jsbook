---
layout: slides
categories: slides
title: Introduction
---

Overview
========

Welcome!
--------

Welcome to **Introduction to JavaScript**! This class is a lab-based, hands-on, problem-solving class that will turn you into a JavaScript adept.

During this course, you will:
- Develop familiarity with the JavaScript language.
- Learn to use common idioms and best practices.
- Understand common features in dynamic programming languages such as introspection, higher-order functions, and closures.
- Become familiar with common JavaScript libraries and tools that are used in web application development.

Are you in the right class? You should have taken one of CS106A or CS106B. You should be comfortable coding in at least one other programming language. An understanding of HTML and CSS is helpful but not necessary. There will be an optional tutorial of HTML and CSS later. If you have any previous experience developing web applications, the first part of the course may be too basic for you, but if you stick around, we will cover some advanced JavaScript language concepts, as well as some useful libraries.

If this is your first time doing programming, this class is probably not appropriate for you. A more appropriate class would be CS105 or CS106A.

What is JavaScript?
-------------------

What is JavaScript? JavaScript is primarily a client-side language.

JavaScript started at Netscape, a web browser developed in the 1990s. A webpage can contain embedded JavaScript, which executes when a user visits the page. The language was created to allow web developers to embed executable code on their webpages, so that they could make their webpages interactive, or perform simple tasks. Today, browser scripting remains the main use-case of JavaScript.

JavaScript's syntax is very similar to C++ and Java. If you have experience in C++ or Java, JavaScript's syntax will seem familiar. 

However, the inner workings of JavaScript is closer to a dynamically-typed, interpreted language such as Python or Ruby.

JavaScript is usually interpreted, not compiled. JavaScript code is read by an interpreter, which reads the instructions in the code and executes them.. A program such as C++ or Java needs to be compiled before it is run. The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute. In contrast, JavaScript has no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. More modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

JavaScript is named after Java, and many ideas are borrowed from the Java language. Other than that, Java and JavaScript are two entirely distinct languages. The most significant difference between them is that Java is a compiled language, and JavaScript is a interpreted language. JavaScript runs on many browsers out-of-the-box, whereas Java applets require an additional plug in. Both languages have different runtime environments, different governing bodies, different libraries.

Despite all its faults, JavaScript is a very useful language. JavaScript runs in every web browser, out of the box. A JavaScript application runs on every device, whereas a desktop or mobile application runs only on the application it is targeted to (Windows, Mac OSX, Linux, iPhone, Android). This allows you to write cross-platform apps in a really easy way. JavaScript's role has also expanded significantly. Platforms such as Node.js allow developers to run JavaScript server-side. It is now possible to create entire web applications in which both client-side and server-side logic is written in JavaScript.

JavaScript can be a very complicated language, and most teams use only a subset of JavaScript. If you read a style guide, it will recommend the use of particular JavaScript techniques, constructs and libraries. Since JavaScript is so messy, this class will make a number of recommendations on what we consider good style. However, we will cover a wide range of styles so that you can jump into a new team and pick up the style quickly.

Live Code Examples
------------------
Live code examples are scattered throughout this text. These snippets of code can be edited and run from within the browser. Click and type within the box to edit, and press the "Run" button to see what they do.

Hello World!
------------
Brian Kernighan and Dennis Ritchie taught that the first thing you should do when learning a new programming language is learn out to print the words "Hello, World!" Here is the program in JavaScript:

{% highlight js %}
console.log("Hello world!");
{% endhighlight %}

The `console.log` function (or method) prints its argument to the console, followed by a newline. We will be using it a lot.

Useful functions
----------------
There are two other useful functions that you might see often. The `alert` function displays a text box with the specified message.

{% highlight js %}
alert("Hello world!");
{% endhighlight %}

The `prompt` function displays a box prompting the user for input.

{% highlight js %}
alert(prompt("What is your name?"));
{% endhighlight %}

View Source
-----------
JavaScript is everywhere on the web. The interactive elements on this page were implemented in JavaScript, of course.

There are two main ways to put JavaScript on the web page, and they both involve the `<script>` tag. The first is to directly include the code within the tags: this is called inline JavaScript. The second, more common practice is to include the code in a `.js` file, and link to the page using the `src` attribute, such as `<script src="code.js"></script>`. Note that in this case, the contents of the script tag should be empty.

You can try it youself on this page. View the source of this page and see if you can find the inline and linked JavaScript code.
<script>
// Example of inline scripts
var youFoundMe = "Hi there! You just found the inline script.";
</script>


The JavaScript Console
----------------------
JavaScript is most often run on webpages inside the browser, but it can also be run server-side. We will go through some of these platforms later. For now, we will run JavaScript in the console, which will allow us to see the results of our code more quickly.

The nice thing about interpreted languages is that they are designed to be run with a single pass through the source code, running each instruction step-by-step. That means that we can give the interpreter a single step and ask it to run it. 

There are a number of JavaScript consoles that allow us to do this. Most browsers have one available. Think of it as a command-line interface that runs JavaScript on your JavaScript engine.

Chrome, Safari and Opera
:Open a new tab. Right click on the page and click **Inspect Element**. Click on **Console**.

Firefox
:Open the **Tools** menu. Go to **Web Developer > Web Console**.

Behind the console is the *read-eval-print loop* (REPL). This refers to the loop that the console runs: it first reads your input, then it evaluates it as JavaScript code, then it prints the results. You will sometimes hear the term REPL being used to refer to any sort of programming shell that allows you to enter code and see results immediately. For instance, Python and Ruby also provide similar REPL shells.

Try running some simple math expressions within the console, such as `1 + 2` or `3 * 4`. JavaScript prints the correct answers back at you. Congratulations, you can now use your computer as a very expensive calculator.

Now try to run the hello world program in the console. It produces two lines of output. The first line is the greeting that we expect. The second line reads `undefined`. This is because the first line is the output that we instructed JavaScript to print, and the second line is the result of evaluating our program. Every JavaScript expression has a result, but some expressions, such as the `console.log` function, return an empty result called `undefined`.

Note that the console prints out the result of the expression, whereas the live code examples do not. We will be using `console.log` to evaluate expressions in the live code examples, but you can omit `console.log`.
