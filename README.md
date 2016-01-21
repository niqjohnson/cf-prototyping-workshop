# Prototyping in the browser with Capital Framework

## Introduction

This repository goes along with a workshop given at the Consumer Financial Protection Bureau January 26, 2016. It’s meant for designer types who are comfortable enough with front-end web stuff (HTML, CSS, Javascript) to copy and paste examples and to write some basic custom code.

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
            <strong>Node.</strong> You’ll need node.js to do run all of the other things in this list. To check if you have node installed, open up your terminal and type `node -v` (or just copy and paste that). If you get something like <code>v0.1.0</code> or <code>v4.2.2</code>, you’ve already got node installed. If not, install node.
        </p>
    </li>
    <li>
        <p>
            <strong>npm.</strong> Node package manager, or npm, is like an app store for code stuff. You need it to install all the code stuff that makes this repo work. Go back to your terminal and type <code>npm -v</code>. If you get numbers like <code>2.14.7</code> when you enter that, you’re good. If not, install npm.
        </p>
    </li>
    <li>
        <p>
            <strong>gulp.</strong> Gulp processes all the components that make up your prototype into a nice, tidy package. It also makes it so your browser magically refreshes every time you save your work, so you really want it. Back to your terminal one more time. Type <code>gulp -v</code>. If you get a message back like <code>CLI version 3.9.0</code>, you’ve got gulp. Otherwise, install gulp (if you’ve got homebrew, just type `brew install gulp` in your terminal).
        </p>
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
            Finally (this is the best part), turn your machine into a web server that MAGICALLY REFRESHES EVERY TIME YOU SAVE CHANGES by typing:
        </p>

        <div class="highlight">
            <pre>gulp watch</pre>
        </div>
        <p>
            That should open up a tab in your default browser that loads <code>http://localhost:3000/dist/prototype/</code>. You’re all set to start working!
        </p>
    </li>
</ol>

### Choose a template

### Add some elements

### Enhance as needed

Fill in additional elements and interactions as needed (GitHub is a good place to look)

Web inspector

scrollTo

Sticky scroll

### Share

Publish (GitHub pages)

### Review and test

Getting feedback can be hard (PDF, screenshots, etc.)

[Blipshot](https://chrome.google.com/webstore/detail/blipshot-%E2%80%94-one-click-scre/mdaboflcmhejfihjcbmdiebgfchigjcf)

[jQuery.autotype](https://github.com/mmonteleone/jquery.autotype)

### Iterate
