---
layout: slides
categories: slides
title: HTML and CSS
published: true
---

HTML and CSS
============

HTML
----
Hypertext Markup Language (HTML) is the primary language of the web. All web pages are written in HTML. HTML was developed in 1991 by Tim Berners-Lee. When it was designed, HTML was envisioned as a document format for researchers to exchange documents. Today, HTML has been repurposed to build all sorts of content on the Internet, including dynamic web applications.

A HTML document is a raw text document that contains tags like `<p></p>`. Tags tells the browser how to display the element, and what kind of element it is.

Some common tags:

- `<h1></h1>` through `<h6></h6>`: Header elements. `<h1></h1>` is the largest header, and `<h6></h6>` is the smallest header.
- `<p></p>`: Returns the node's first child in the tree, or null if the node is childless.
- `<strong></strong>`: Strongly emphasized text, usually rendered as bold.
- `<em></em>`: Emphasized text, usually rendered as italics.
- `<ul></ul>`: Unordered (bullet) list.
- `<ol></ol>`: Ordered (numbered) list.
- `<li></li>`: List item, used within an en enclosing list element.
- `<a href=""></a>`: Anchor (hyperlink) element. The link target is specified by the `href` attribute.
- `<div></div>`: Block enclosing element.
- `<span></span>`: Inline enclosing element.
- `<form action="" method=""></form>`: Form element.
- `<input type=""></input>`: Form input element. The type can be one of `text`, `password`, `radio`, `checkbox`, or `submit`.

There are also other tags that allow you to embed other resources:

- `<img src=""></img>`: Embeds an image.
- `<script src=""></script>`: Embeds or links JavaScript code. This tag can contain inline code, or it can specify a URL of a linked script by the with the `src` element.
- `<style></style>`: Embeds CSS code. This should be used in the `<head>` portion of the document.

Most browsers ship with a tool that allows you to analyze the structure of a HTML document. In Chrome and Firefox, you can access the tool by right-clicking on the page and clicking Inspect Element. This displays a pane containing the parsed HTML source. You can then hover your mouse over elements in the source to see the corresponding rendered elements in the page.

There are a number of different versions of HTML, which differ in the elements that are allowed, and in their structure. This web page uses HTML 5. The standard document structure of a HTML 5 document is shown below.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
    <title>Hello world!</title>
</head>
<body>
	<h1>Hi</h1>
	<p>Hello world!</p>
</body>
</html>
{% endhighlight %}

The title of the page goes in the `<title>` element. The displayed content of the page goes within the `<body>` section. Most of the elements discussed above go within the `<body>` section, with the exception of the `<style>` and `<link>` elements, which should go in the `<head>` section.
