# GDI HTML Slides Template

<!-- TOC start -->

- [GDI HTML Slides Template](#gdi-html-slides-template)
  - [Usage Instructions](#usage-instructions)
    - [Using the CHANGELOG](#using-the-changelog)
  - [Live Demo and Template Slides](#live-template-slides)
  - [Example Courses](#example-courses)
  - [Course Creation Tips](#course-creation-tips)
  - [Slide Markup](#slide-markup)
  - [Publishing Your Course](#publishing-your-course)
    <!-- TOC end -->
    <!-- TOC --><a name="gdi-html-slides-template"></a>

---

**Girl Develop It** uses a customized HTML slide template for its open-source course content.

Our slides are powered by [Reveal.js](https://revealjs.com/), the popular HTML presentation framework. For simplicity and ease of use, the Reveal.js files are served via CDN.

The template files reference a **`shared-assets`** folder in the [main repo](/shared-assets/) that hold the following folders:

- `css` - Contains the `gdi-theme.css` stylesheet
- `imgs` - Contains GDI logo images and stock (Unsplash) images
- `fonts` - Contains files for GDI's primary fonts: `Gotham`, `League Gothic` and `Source Sans Pro`
- `js` - Contains `revealConfig.js` file

:exclamation: DO NOT ADD MATERIAL TO THE **`shared-assets`** FOLDER.:exclamation:

:exclamation: If you're using new images or custom CSS or custom JS for your course, create a course-specific `images`, `css`, or `js` folder in your course folder and place files there.

---

## Usage Instructions

- Fork the parent repo where your course folder will live
  <br/>

- To create a new course, duplicate the `_course-template` folder
  <br/>

- Rename the duplicate folder with your course title
  <br/>

- Review `demo-gdi-slides.html` for recommended ways we use Reveal.js features

  - Copy or model the demo slides and code snippets as needed
  - Keep (rather than delete) the `demo-gdi-slides.html` for future reference
    <br/>

- To build content for a [single-class course](#examples):

  - Rename `template_index.html` to `index.html`
    - Delete the duplicate `index` file
  - Make updates as outlined in the file's instructions, for example:
    - Update course name in the `<title>` tag
    - Update course name in the `<footer>` tag
    - etc.
  - Create course slides - (Instructions are included in template file - See also [Slide Markup](#slide-markup) below)
    <br/>

- To build content for a course with [more than one class / session](#examples) -- also known as a **mini-cohort** _[2-3 classes]_ or a **cohort** _[4+ classes]_:

  - Rename `template_cohort-index.html` to `index.html`; it serves as a cover page or 'dashboard' that links to all classes in the cohort
  - Duplicate `template_index.html` to create subsequent class files: `class1.html`, `class2.html`, etc.
    - OPTIONAL: Create an `intro.html` file for instructor and course introduction
  - Create course slides - Make updates as outlined in the file's instructions
    <br/>

- If using new images for your slides, create an `images` folder in your course folder

  - :exclamation: Do not add images to the `shared-assets` folder
  - :bulb: Include credit /attribution for image(s) when possible
  - :bulb: Optimize images to reduce file size
    - Use an image compression tool such as tinypng.com
      <br/>

- Need or want to use custom CSS? Create a `style.css` file or a `css` folder in your course folder; add your custom code there

  - :exclamation: Do not add custom css to the shared `gdi-theme.css` file in the `shared-assets` folder, or add custom css file to the folder
  - Link the custom stylesheet to your course `html` file(s)
    <br/>

- **Recommended**: Update this `README` (delete original content first) with any of the following that can help future instructors to teach the course:

  - Course goals and objectives
  - Course outline or structure
  - Teaching tips
  - Suggested exercises
  - Resources
  - etc.
    <br>

- **Optional / Useful Material to Include**:
  - Create folders for `demos` and `exercises`
  - Create a `resources.html` file to curate recommended resources, links, etc., cited in the course

### Using the CHANGELOG

## Live Template Slides

- [GDI Demo Slides](https://girldevelopit.github.io/gdi-html-css/_course-template/demo-gdi-slides.html)
- [Template Index Slides](https://girldevelopit.github.io/gdi-html-css/_course-template/template_index.html)
- [Template Cohort Index / Dashboard](https://girldevelopit.github.io/gdi-html-css/_course-template/template_cohort-index.html)

## Example Courses

Cohort course folder structure:

- [CSS Grids Basic](https://github.com/girldevelopit/gdi-html-css/tree/main/css-grid-basics) (_Update in progress_)
  - [Live Slides](https://girldevelopit.github.io/gdi-html-css/css-grid-basics/)

Single-class course folder structure:

- Intro to JavaScript (_Update in progress_)

## Course Creation Tips

- Limit the amount of content on each slide:

  - Avoid a long list of bullet points
  - Split long text content into two or more slides
  - If using RevealJS's [fragments feature](https://revealjs.com/fragments/) to present content, do so sparingly
    <br>

- Lean more towards visual content (images, gifs, videos, code snippets) to support learning concepts
  <br>

- To make the course curriculum helpful for future instructors to use:

  - Add details such as instructions for teaching the course; FAQs; suggested improvements or changes; class management tips and best practices to the course `README.md`
  - Add a `demos` and/or `exercises` folder to store exercises you've used or recommend for future classes

## Slide Markup

Markup hierarchy needs to be `<div class="reveal"> <div class="slides"> <section>` where the `<section>` represents one slide and can be repeated indefinitely.

```html
<div class="reveal">
  <div class="slides">
    <section>Slide 1</section>
    <section>Slide 2</section>
    <section>Slide 3</section>
  </div>
</div>
```

## Publishing Your Course

_Description coming..._
