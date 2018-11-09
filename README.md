# README #
This README would normally document whatever steps are necessary to get your application up and running.

## Repository Structure ##
This repository hooks directly into Forestry.io (CMS)

Updates to the master branch push to Forestry. When updates are made in Forestry, markdown files are pushed to the master branch. Forestry also pushes the built,
production ready site to the DEPLOY branch. DO NOT manually override the deploy branch.

### What is this repository for? ###

This repository is for the Jekyll based GigaYeast website

It currently uses:

Jekyll  
Forestry.io  
Algolia (search functionality)  

### How do I get set up? ###

Make sure Jekyll 3.5 is running on your computer  
Run `bundle install`  
Run `bundle exec jekyll serve`  
Run `bundle exec jekyll build` if you aren't seeing changes  
Run `jekyll serve --livereload` if you want livereload enabled during development

### Contribution guidelines ###

Styling is written in the `_sass` folder

### Who do I talk to? ###

Cat
