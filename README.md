## This is a template or model repository for Girl Develop It's technical track repos.

To prevent _"repo sprawl"_ (creating repos for individual courses), GDI has track- or subject-matter-specific repositories that contain individual courses:

- [HTML & CSS](https://github.com/girldevelopit/gdi-html-css)
- [JavaScript](https://github.com/girldevelopit/gdi-javascript)
- [Python](https://github.com/girldevelopit/gdi-python)
- [User Experience](https://github.com/girldevelopit/gdi-ux)
- [Data Science](https://github.com/girldevelopit/gdi-data-science)
- [Tech 101](https://github.com/girldevelopit/gdi-tech101)

#### :exclamation: Use this template repo to create a new technical track or subject-matter repository; do not use this template to start a new course.

- To start a new course, go to a specific track repo (_see the list above_) and use the `_course-template` folder in that repo.

## Content

This template repo contains a `_course-template` folder and a `shared-assets` folder.

The `_course-template` folder is the template for creating **individual courses** that go into the primary track or subject-matter repo.

- The `_course-template` folder includes a [README](/_course-template/README.md) with instructions for creating courses.

The `shared-assets` folder holds custom GDI `css`, `images`, `js` files that **all** course folders in a primary track repo reference.

- :exclamation: **Do not add course-specific assets or content to the shared-assets folder.**

## Usage

To create a new track or subject-matter repo:

- Start and name a new repo in [GDI's main or organizational github account](https://github.com/orgs/girldevelopit/repositories)
  <br>

- Duplicate the contents of this template repo and add them to the new repo
  <br>

- Delete the contents of this README, and update with a description about the new repo
  <br>

- Duplicate the `_course-template` folder to create or start new courses

  - :exclamation: Do not delete the `_course-template` folder; it should always be available to create other courses
  - A track repo can contain more than one course
    <br>

- Make sure to include/keep the `shared-assets` folder in the new repo
  <br>

- Create a `.gitignore` file in the new repo's root directory to exclude hidden system files
  <br>

- RECOMMENDED: Create an empty `.nojekyll` file in the new repo's root directory; this allows the repo to [bypass Jekyll processing for Github Pages](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/)
