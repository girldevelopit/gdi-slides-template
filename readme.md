# Girl Develop It Slides Template

We use a customized slide template for all Girl Develop It course slides. Each time you create a new course, clone a fresh copy of the blank slides. All the styles and javascript you need are included; you only need to edit the index.html file to add your content.

These slides are based on reveal.js, a framework for easily creating beautiful presentations using HTML. All you should need to do is edit the HTML, but if you're looking for more information, [check out the reveal.js site](http://lab.hakim.se/reveal-js/).

The sample slides include examples of the most common slide types, including images, lists, code samples, etc.

### Curriculum Creation Tips

* We recommend that you use unstacked slides for better readability. 
* Limit the amount of content you add to each slide. An image, a sentence, or a short code sample are much more understandable than a long list of bullet points.
* Prefer visual explanations to text where possible.
* Add teachers notes to fill in more details, and for class management notes like pacing and breaks.

To make your slides viewable on the web using GitHub, create a branch called ```gh-pages```. The slides will be viewable at ```http://<username>.github.io/<repositoryname>```


## Editing Instructions

### Markup

Markup heirarchy needs to be ``<div class="reveal"> <div class="slides"> <section>`` where the ``<section>`` represents one slide and can be repeated indefinitely. If you place multiple ``<section>``'s inside of another ``<section>`` they will be shown as vertical slides. The first of the vertical slides is the "root" of the others (at the top), and it will be included in the horizontal sequence. For example:

```html
<div class="reveal">
	<div class="slides"> 
		<section>Single Horizontal Slide</section>
		<section>
			<section>Vertical Slide 1</section>
			<section>Vertical Slide 2</section>
		</section>
	</div>
</div>
```

### Markdown

It's possible to write your slides using Markdown. To enable Markdown, add the ```data-markdown``` attribute to your ```<section>``` elements and wrap the contents in a ```<script type="text/template">``` like the example below.

This is based on [data-markdown](https://gist.github.com/1343518) from [Paul Irish](https://github.com/paulirish) which in turn uses [showdown](https://github.com/coreyti/showdown/). This is sensitive to indentation (avoid mixing tabs and spaces) and line breaks (avoid consecutive breaks).

```html
<section data-markdown>
	<script type="text/template">
		## Page title
		
		A paragraph with some text and a [link](http://hakim.se).
	</script>
</section>
```

### Internal links

It's easy to link between slides. The first example below targets the index of another slide whereas the second targets a slide with an ID attribute (```<section id="some-slide">```):

```html
<a href="#/2/2">Link</a>
<a href="#/some-slide">Link</a>
```

### Fullscreen mode
Just press »F« on your keyboard to show your presentation in fullscreen mode. Press the »ESC« key to exit fullscreen mode.


### Fragments
Fragments are used to highlight individual elements on a slide. Every elmement with the class ```fragment``` will be stepped through before moving on to the next slide. Here's an example: http://lab.hakim.se/reveal-js/#/16

The default fragment style is to start out invisible and fade in. This style can be changed by appending a different class to the fragment:

```html
<section>
	<p class="fragment grow">grow</p>
	<p class="fragment shrink">shrink</p>
	<p class="fragment roll-in">roll-in</p>
	<p class="fragment fade-out">fade-out</p>
	<p class="fragment highlight-red">highlight-red</p>
	<p class="fragment highlight-green">highlight-green</p>
	<p class="fragment highlight-blue">highlight-blue</p>
</section>
```


### Speaker Notes

reveal.js comes with a speaker notes plugin which can be used to present per-slide notes in a separate browser window. The notes window also gives you a preview of the next upcoming slide so it may be helpful even if you haven't written any notes. Append ```?notes``` to presentation URL or press the 's' key on your keyboard to open the notes window.

By default notes are written using standard HTML, see below, but you can add a ```data-markdown``` attribute to the ```<aside>``` to write them using Markdown.

```html
<section>
	<h2>Some Slide</h2>

	<aside class="notes">
		Oh hey, these are some notes. They'll be hidden in your presentation, but you can see them if you open the speaker notes window (hit 's' on your keyboard).
	</aside>
</section>
```


## License

Reveal.js Copyright (C) 2011-2012 Hakim El Hattab, http://hakim.se, MIT License

GDI template (C) 2015 by Cara Jo Miller for Girl Develop It, (License??)
