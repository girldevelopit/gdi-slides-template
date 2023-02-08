# GDI HTML Slides Template

**Girl Develop It** uses a customized HTML slide template for its open-source course content.

Our slides are powered by [Reveal.js](https://revealjs.com/), the popular HTML presentation framework. For simplicity and ease of use, the Reveal.js files are served via CDN.


## Usage Instructions

- Clone or duplicate the contents of this repo. 

- Review `demo-gdi-slides.html` for common and recommended ways we use Reveal.js features.
  - Copy or model the demo slides and code snippets as needed.

- To build content for a single course you only need to clone  the `template_index.html` file and make edits: 
  - Rename the file to `index.html`
  - Update course name in the `<title>` tag.
  - Update course name in the `<footer>` tag.
  - Create course slides. (Instructions included in template file. See also [Slide Markup](#slide-markup) below.)

- For a cohort or multi-class series:
   - Clone `template_cohort-index.html`
   - Rename to `index.html`; it serves as a cover page that links to all classes in the series
   - Clone `template_index.html` to create subsequent class files: `class1.html`, `class2.html`, etc.

- If incorporating images, add them to the `assets/imgs` folder.
  - Include credit /attribution to image(s) when possible.
  - Optimize images to reduce file size. Try tinypng.com.

- Need/Want to use custom CSS? Add the code to the `style.css` file.

**Recommended:** Preserve the `demo-gdi-slides.html` and `template_` files. Use them as reference/style guide.


## Course Creation Tips
- We recommend using unstacked slides (rather than nested slides) for better readability.

- Limit the amount of content added to each slide. An image, a sentence, or a short code sample are much more understandable than a long list of bullet points.

- Prefer visual explanations to text where possible.

- Add "teachers' notes" such as FAQs, class management tips/best practices to the course `README.md` that can help future instructors.


### Slide Markup
Markup heirarchy needs to be ``<div class="reveal"> <div class="slides"> <section>`` where the ``<section>`` represents one slide and can be repeated indefinitely. 

```html
<div class="reveal">
	<div class="slides">
		<section>Slide 1</section>
		<section>Slide 2</section>
		<section>Slide 3</section>
	</div>
</div>
```
