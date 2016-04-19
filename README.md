# Prototyping in the browser with Capital Framework

## Introduction

This repository goes along with a workshop given at the Consumer Financial Protection Bureau April 12, 2016. It’s meant for designer types who are comfortable enough with front-end web stuff (HTML, CSS, Javascript) to copy and paste examples and to write some basic custom code.

Even if you weren’t at the workshop, you should still be able to follow along on your own just by reading this readme. If you have any questions, get in touch with me via my GitHub profile and I’ll do my best to help.

## Why prototype in the browser?

Here at the beginning of 2016, there are dozens of tools you can use to create interactive prototypes of websites or apps. Each has its own pros and cons. Low fidelity sketches are quick and cheap, but they're terrible at conveying real interactions. Prototyping tools like Axure lower the bar for making interactive prototypes you can test in a browser, but all they’re really doing is putting a novice user interface on making a web page (and no interface I’ve ever seen gets responsive prototypes right). Cajoling a front-end developer to make your prototype for you gets you a really high fidelity prototype, but it’s too costly to use to test quick ideas.

I think prototyping in the browser using simple HTML, CSS, and Javascript hits a sweet spot right in the middle of all those methods. With a little practice, you’ll get comfortable enough to churn out high fidelity, testable prototypes quickly and cheaply. With a little more practice, you’ll be making custom designs that fit your product’s needs way better than even the best prototyping tool could. Even better, if you use a good framework (like, say, Capital Framework) to prototype, responsiveness and accessibility will be baked right in.

This workshop will walk you through the steps to create, share, and review simple prototypes using nothing more than a good text editor and your favorite web browser (OK, OK, and a few command line tools like git and gulp, too). But first, a few general tips to keep in mind when starting to prototype in the browser.

## General tips

**Start simple.** I prefer to build something simple and find out where it needs more than to build something complex and find out I did too much. I’ll often start with very simple in-browser prototypes that contain just enough detail to help me validate that I’m on the right track (sometimes all it takes to start is a few paragraphs of text describing what’s going to happen on the page). I’ll test those simple prototypes however I can, then “design up” based on what I learn from that testing.

**Copy and recycle.** As far as I can tell, there are like five basic design patterns in the world—everything else is a slight variation. Unless you have evidence to the contrary (or are explicitly trying to do something new), there’s not much reason to depart from what you know works. So, I prefer designing with a solid framework that covers all the basics (like, oh I don’t know, Capital Framework) and reusing as much of my previous work as I can. (Don’t worry if you don’t have previous work to draw from—this repository has a bunch of example components you can copy and paste to get started.)

**Don’t think like a developer (even if you’re a developer).** The point of prototyping in the browser isn't to write production-quality code, it's to quickly test (and discard!) ideas. Don't worry about writing perfect code. I’m not advocating for `!important`s on every line of your CSS; I am suggesting that refactoring your Javascript for maximum performance is a task best left for later. That said, as you get more comfortable working in the browser, you can focus a little more on writing code that (if the idea is working) can be integrated into the final product.

**Everything first.** I know designing “mobile first” is all the rage, but one of my favorite parts of designing in the browser is that I can constantly check how things feel at any screen size (because, after all, your users should have a great experience at any screen size). I load up the prototype I’m designing in at least three Chrome tabs set to different widths, and I constantly switch among them while I work. (Hot tip: set Chrome’s web inspector to appear on the right side in each tab and shrink the viewport down to screen sizes that are important to you *or* use the device emulator).

## Actually making a thing instead of reading about actually making a thing

OK, time to stop talking about how awesome designing in the browser is and start doing it. Hold your excitement, though (unless command lines get you really excited)—first we need to do some setup to make the process as smooth as possible.

### Install and clone

This repo uses a very, very basic version of the standard CFPB front-end setup (don’t show it to any real developers, though, because many shortcuts were taken). You’ll need to make sure you have a few tools installed to get started.

<ol>
    <li>
        <p>
            <strong>Git.</strong> You’re reading this on GitHub, so I’m going to assume you have git installed and are comfortable with git basics (either through the command line or through a git client). If you don’t have git, get git.
        </p>
    </li>
    <li>
        <p>
            <strong>Node.</strong> You’ll need node.js to do run all of the other things in this list. To check if you have node installed, open up your terminal and type:
        </p>
        <div class="highlight">
            <pre>node -v</pre>
        </div>
        <p>
            If you get something like <code>v0.1.0</code> or <code>v4.2.2</code>, you’ve already got node installed. If not, install node.
        </p>
    </li>
    <li>
        <p>
            <strong>npm.</strong> Node package manager, or npm, is like an app store for code stuff. You need it to install all the code stuff that makes this repo work. Go back to your terminal and type:
        </p>
        <div class="highlight">
            <pre>npm -v</pre>
        </div>
        <p>
            If you get numbers like <code>2.14.7</code> when you enter that, you’re good (it’s usually installed along with node). If not, install npm.
        </p>
    </li>
    <li>
        <p>
            <strong>gulp.</strong> Gulp processes all the components that make up your prototype into a nice, tidy package. It also makes it so your browser magically refreshes every time you save your work, so you really want it. Back to your terminal one more time. Type:
        </p>
        <div class="highlight">
            <pre>gulp -v</pre>
        </div>
        <p>
             If you get a message back like <code>CLI version 3.9.0</code>, you’ve got gulp. Otherwise, install gulp by typing
        </p>
        <div class="highlight">
            <pre>npm install --global gulp</pre>
        </div>
    </li>
    <li>
        <p>
            <strong>Fork and clone this repository.</strong> First, fork this repo in GitHub. Then, clone your fork to your machine using whatever interface you prefer (command line or a git client) and wherever you like to keep your repos.
        </p>
    </li>
    <li>
        <p>
            <strong>Initial setup.</strong> In your terminal, go to your fork. For example:
        </p>
        <div class="highlight">
            <pre>cd ~/Projects/cf-prototyping-workshop</pre>
        </div>
        <p>
            Then install all the code stuff you need to turn your machine into a browser-designing powerhouse by typing:
        </p>

        <div class="highlight">
            <pre>npm install</pre>
        </div>
        <p>
            Wait for that to finish (hopefully without errors). Then do an initial processing of all the stuff by typing:
        </p>

        <div class="highlight">
            <pre>gulp</pre>
        </div>
        <p>
            Finally (this is the best part), turn your machine into a web server that MAGICALLY REFRESHES EVERY TIME YOU SAVE CHANGES by typing (you might want to do this in a new terminal tab, since the `gulp watch` process will run continuously):
        </p>

        <div class="highlight">
            <pre>gulp watch</pre>
        </div>
        <p>
            That should open up a tab in your default browser that loads <code>http://localhost:3000/dist/prototype/</code>. You’re all set to start working! If you need to stop `gulp watch` for any reason, just hit `control + c` in the terminal tab it’s running in.
        </p>
    </li>
</ol>

### Get oriented

Now that you’ve got all the requirements installed, take a look inside your local copy of `cf-prototyping-workshop`. You can ignore everything in there but the `src` folder. That’s where you’ll do all your work. Specifically, you’ll put all the HTML pages you need in `src/prototype`, all the CSS in `src/css`, all the Javascript in `src/js`, and all the images in `src/img`. Gulp will take care of processing everything in those folders to make your designs viewable and shareable in a browser.

Speaking of things to ignore, you can also ignore most of the files in `src/css`; they’re all our underlying CFPB styles that will make your project look like a real CFPB page. The only file you’ll need to edit in there is `custom.less`. Go ahead and open that in your text editor of choice.

If you need to write some custom Javascript for your prototype, you can plop all your code in `src/js/index.js`. Remember, designing in the browser isn’t the time to think like a front-end developer, so don’t worry about modularizing your code or anything like that. Just start writing under the “Start writing your prototype's custom JS here” line.

### Choose a template

You’ll notice a couple of other folders in `src`. Let‘s start in `templates`, where you’ll see a few HTML files. Those are very generic templates for some common types of pages. Remember that tip about copying as much as you can to get your prototype started fast? Here’s where the copying starts.

1. Open the template that best fits your project in your text editor. If you’re not sure which one you need, you can preview them (as long as you’ve got `gulp watch` running in a terminal tab) at `http://localhost:3000/dist/templates/{template-name}.html`.

2. Select everything in that template and copy it.

3. Open `src/prototype/index.html` in your text editor.

4. Select everything in there and paste what you copied from the template.

5. Save `index.html`.

As long as you have `gulp watch` running in a terminal tab, your browser tab with `http://localhost:3000/dist/prototype/` in it will automagically refresh to show your changes. Look, you’ve got a basic page template to start with!

### Add some components

Odds are that the basic template you’ve now got isn’t going to exactly fit what you need in your prototype. Obviously you’ll have to add real content, but you’ll also probably need to make changes to the structure of the page by adding new components.

You can add basic Captial Framework components to the page pretty easily. I’ve put a bunch of the most common components in the `src/elements` folder. (As with the templates, you can preview the components in your browser by opening `http://localhost:3000/dist/elements/cf-{whatever}.html`.) If any of those components work for you, just copy and paste their HTML into your page.

If you need to use less common Capital Framework components—or if you need more info on how anything in Capital Framework works—check out the [Capital Framework documentation](https://cfpb.github.io/cf-core/docs/).

### Enhance as needed

If you’re following the “start simple” rule, a prototype with basic Capital Framework components may be all you need for a first iteration. Sometimes that’s not the case (especially if you’re designing a tool with lots of interactivity). In those cases, you’ll need to enhance your prototype with custom HTML, CSS, and Javascript.

Creating truly custom enhancements is way too big a topic for this workshop, but I have included a few non-Capital Framework Javascript libraries I often use in prototypes. To use any of these, add a line like this to the very end of the `<head>` of every page you need it on:

```html
<script src="../js/{library-name}.js"></script>
```

- **[jQuery.scrollTo](http://demos.flesler.com/jquery/scrollTo/)** is a nice little library to let you smoothly scroll to any part of the page.
- **[jquery.sticky-kit](http://leafo.net/sticky-kit/)** makes elements “sticky” as you scroll.

If you find more libraries you’d like to use, adding them to your prototype is pretty easy. Just download the library’s Javascript file and drop it into `src/vendor/prototype`. If you have `gulp watch` running in a terminal tab, you just need to add the usual `<script src="../js/{library-name}.js"></script>` line to the end of the `<head>`.

If you’re looking for good enhancements, GitHub is a great place to start. I check GitHub’s [trending repositories](https://github.com/trending) for inspiration every so often and [star stuff that looks useful](https://github.com/stars/niqjohnson).

### Share

Once of the biggest benefits of designing in the browser is that other people can look at your designs in their native context, the browser. And one of the biggest benefits of all the setup we went through earlier is that gulp packages up your prototype in a nice, shareable folder, `dist`. To share the prototype, all you have to do is plop `dist` on a server accessible by the people you want to share it with.

I like to use GitHub Pages to share my prototypes. Here’s my usual process for setting it up:

1. When you’re ready to share your prototype, first commit all the changes you’ve made. If you’re using git via the command line, you can do that from your repository with `git commit -am 'Update prototype'`.

2. Next, make a branch from `master` called `gh-pages`. From the command line, that’s `git checkout -b gh-pages`.

3. I like to delete everything other than `dist` from my `gh-pages` branch. This isn’t a necessary step, but I like to keep what I share as cleaned up as possible.

4. I also like to then rename `dist` to something like `v1`. That way, if you want to share multiple versions with people, you can point them to URLs like `v1/prototype` and `v2/prototype`.

5. When I’ve got all the files where I want them, I commit all the changes (`git commit -am 'Set up GH pages'`) and push them to GitHub (`git push origin gh-pages`).

Once the files are pushed to GitHub, they’ll be viewable at either `{username}.github.io/cf-prototyping-workshop/v1/prototype/` (if your repo is on github.com) or `{github.enterprise.url}/pages/{username}/cf-prototyping-workshop/v1/prototype/` (if your repo is in GitHub Enterprise).

If GitHub pages won’t work for your project, you can put the files in `dist` on any web server instead.

### Get feedback

With your prototype now accessible to anyone with the link, you’re ready to gather feedback to help you decide what to focus on in your next iteration.

Getting feedback on a prototype in the browser can be a mixed blessing. On one hand, reviewers or testers can interact with the design on any device as they normally would, giving them a much better sense of how the design will actually work. On the other hand, sometimes showing designs in the browser sets expectations too high—if a placeholder link doesn’t work or if the reviewer insists on using IE8, the feedback you get may be more about the process of prototyping than on the actual prototype.

I use a few methods to get around these drawbacks.

- First, I always preface showing anyone the design (or emailing them the link) with a warning that this is just a prototype and some things might not work. I’ll specifically call out any big features that I know aren’t working yet (“we’re planning to make that sidebar sticky but haven’t gotten to it yet”).
  - Links that don’t yet go anywhere and forms that don’t yet submit are high on the list of things I’ve seen provoke the “hey it’s broken!” response. I’ve included a little JavaScript utility here to head off those comments. For placeholder links in your prototype, just do `href="#not-yet"`; for placeholder forms, do `action="#not-yet"`. When those links are clicked or those forms are submitted, an alert will pop up letting your reviewers know those elements aren’t working yet.

- If I know I need feedback from someone who regularly ignores such warnings, sometimes I’ll send screenshots instead. [Blipshot](https://chrome.google.com/webstore/detail/blipshot-%E2%80%94-one-click-scre/mdaboflcmhejfihjcbmdiebgfchigjcf) is an amazing Chrome extension that takes a screenshot of the entire page. [Awesome Screenshot](https://itunes.apple.com/us/app/awesome-screenshot-for-safari/id918780145?mt=8) does the same thing in Mobile Safari. (Those two tools come in handy in a million other situations, too.)

- Often I’ll have the prototype set up for only one particular path a user could take or not want the reviewer to have to go through filling in a bunch of form fields. In those cases, I’ll use [jQuery.autotype](https://github.com/mmonteleone/jquery.autotype) to fake filling in form fields.

### Iterate

Iterating on your design using the feedback you’ve gotten repeats a lot of the process you’ve used so far: start with basic components, enhance as needed, share, repeat.

One nice change is that you don’t have to go through all those initial setup steps again. Just run `gulp watch` in a terminal tab every time you want to work on your design, and the prototype will be viewable at `http://localhost:3000/dist/prototype/`.
