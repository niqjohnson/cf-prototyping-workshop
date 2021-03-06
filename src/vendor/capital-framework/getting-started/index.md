---
layout: default
title:  "Getting started"
---

Capital Framework provides a set of modular HTML, CSS, and JavaScript patterns that can be used both collectively and individually. There are several ways to integrate Capital Framework into your project:

1. [Using the generator](#using-the-generator)
1. [Using Less](#using-less)
1. [Downloading the compiled CSS](#downloading-the-compiled-css)

Our recommended workflow is to use the generator to scaffold out a new Capital Framework project. This allows you to pick and choose your modules as well as providing a solid front end build process.

## Using the generator

To use the generator, you will need [Node.js](http://nodejs.org/), [Yeoman](http://yeoman.io/), [Grunt](http://gruntjs.com/), and [Bower](http://bower.io/).

### Installing dependencies

[Node.js](http://nodejs.org/) can be downloaded and installed directly from the Node website, or by using a package manager for your system. At the CFPB we use Homebrew. To install the dependencies:

{% highlight bash %}
$ brew install node #if installing node with homebrew
$ npm install -g grunt-cli bower yo generator-cf
{% endhighlight %}

### Scaffolding out a project

To create a new project, create a directory, cd into that directory, and run the `yo cf` command:

{% highlight bash %}
$ mkdir my-awesome-projet
$ cd my-awesome-project
$ yo cf
{% endhighlight %}

The generator will prompt you to complete information about the project and choose the Capital Framework modules you would like to use.

### Navigating the project folder

Once the generator has finished you'll have a folder full of files and folders.
Here's a quick guide on working with these files:

- Run `grunt build` to process the files in `src` and output them to `dist`.
- To view your site, go to the dist directory and start a local server: `cd dist && python -m SimpleHTTPServer`. You can now navigate to `localhost:8000` in your web browser.
- Edit files within the `src` directory and re-run `grunt build` to view changes.

#### Editing the Less and JS

The generator has created a starter Less file at `src/static/css/main.less`.
This file includes all of the necessary imports needed for Capital Framework.
There is also a starter JavaScript file at `src/static/js/app.js`.
Both `main.less` and `app.js` are already wired into `Gruntfile.js`,
so compiling is as easy as running `grunt build`.
`grunt build` also copies files from `src` into `dist`, which will update what you see at
`localhost:8000/`.

### Theming / Customizing

You can override component UI colors within `src/static/css/cf-theme-overrides.less`.
This is already set up for you and gets imported by `main.less`.
If you would like to use your own color palette simply replace the contents of
`brand-palette.less` with your own color variables,
then update `cf-theme-overrides.less` by overriding each UI color variable
with a color from `brand-palette.less` or any color of your choosing.

The same applies when you need to add custom styles to your project.
You can add any custom `.less` files to your project that you may need,
just remember to import them in `main.less` using the correct path.

## Using Less

First install [Bower](http://bower.io/), then run `bower install capital-framework`.
This will download Capital Framework to your project's `bower_components` directory.
You can then import the framework into your application's primary Less file:

{% highlight css %}
@import (less) "bower_components/capital-framework/src/capital-framework.less";

// the rest of your stylesheet...
{% endhighlight %}

Just want one or two CF components and not the entire framework?
Simply install and `@import` only the components you need.

{% highlight sh %}
$ bower install cf-buttons cf-icons
{% endhighlight %}

{% highlight css %}
@import (less) "bower_components/cf-buttons/src/cf-buttons.less";
@import (less) "bower_components/cf-icons/src/cf-icons.less";

// the rest of your stylesheet...
{% endhighlight %}

Not using Less? The compiled CSS file can be found in
`bower_components/capital-framework/assets/css/main.min.css`.

## Downloading the compiled CSS

Capital Framework's compiled CSS can be [downloaded here](https://cfpb.github.io/capital-framework/releases/capital-framework-latest.zip).
Download it and integrate it into your project using standard `<link>` and `<script>` tags.

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
    <title>My Awesome Project</title>
    <link rel="stylesheet" href="capital-framework.min.css">
</head>
<body>
    <!-- Your project's HTML goes here. -->
    <script src="capital-framework.min.js"></script>
</body>
</html>
{% endhighlight %}
