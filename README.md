# HCA Design System Guide

HCA Design System Guidelines Site

This site serves as the "map" of HCA Design System. It is the source of truth
that you can count on to point you in the right direction in the world of HCA Design System. 

## Dependencies
1. Node.js & NPM v. `6.9.4` or later
3. Globally installed Grunt v. `1.0.2` or later.

## Project Setup

1. Clone this repository
2. run `npm install` in the root directory (hca-design-system-guide/)
3. run `grunt serve` to start serving locally with livereload

## Usage

### Grunt Tasks

##### `grunt serve` (default grunt task)
Serve your source locally into your browser. BrowserSync will automatically load any changes to HTML, CSS and JavaScript that you make.

##### `grunt check`
Check the quality of your source with tools like [ESLint](http://eslint.org/), [CSSLint](http://csslint.net/), and [Uncss](http://giakki.github.io/uncss/).

##### `grunt build`
Build the concatenated, minified production version of the source into the `dist` directory.

##### `grunt deploy`
Deploy the production version of the source to your own url via ftp.



## Project Structure

### Working Directory Tree
```
source/
  |__ _includes/
  |     (directories of handlebars partials)
  |  
  |__ _layouts/
  |      (page layouts to declare at the top of every index.hbs file)
  |  
  |__ _release-notes-markdown/
  |      (markdown files from github release notes)
  |
  |__ page-name/
  |     |__ index.hbs (every page should be created as an index.hbs inside a named directory)
  |     
  |__ page-name/ 
  |    |__ sub-page-name/
  |    |     |__ index.hbs
  |    | 
  |__ styles/
  |    |__ hca-design-system/
  |    |     (design system specific styles)
  |    |   
  |    |__ site/
  |    |     (site specific styles unrelated to HCA Design System)
  |    |  
  |    |__ vendor/
  |    |     (manually maintained vendor styles - just bootstrap)
  |    | 
  |__ scripts/
  |    |__ vendor/
  |    |     (manually maintained vendor scripts - just bootstrap and jquery)
  |    | 
  |    |__ app.js (any custom presentational js) 
  |    |
  |__ index.hbs (index page for entire site) 
  
```


### Styles
Styles are written in SCSS and are kept in the ```styles/``` directory. 
They are broken into three main categories:

1. ```hca-design-system/```
  -Any styles that are reusable and applicable to the HCA Design System
2. ```site/```
  -Any styles that are specifically pertaining to this site 
3. ```vendor/```
  -Any third party or vendor styles or frameworks being used. We are currently managing these manually as we are really only using bootstrap and jquery as rapid convenience of functionality. Styles should be written from scratch.  
  
  
### Scripts 
The scripts folder has an `app.js` file that can be used for custom presentational Javascript. The  `vendor/` directory houses bootstrap and jquery for quick functionality on the site.

### Adding New Pages / Content 
[Adding a New Page](https://github.com/hca-design-system/hca-design-system-guide/blob/master/source/docs/adding-a-new-page.md)


### Updating the Version Number 
We keep the version number in a partial in the  ```_includes/global/version-number.hbs``` file. This partial is used in multiple locations on the site and represents the current version number. You only need to update it in this file. 


### Adding Release Notes 
Currently we write our release notes in markdown and version them on GitHub. You should copy and paste those release notes into a markdown file in the ```_release-notes-markdown/``` directory. The file should be titled ```release-x-x-x.md``` with the x's representing the version number of that release. 

You then need to change the handlebars include and version number under the Latest Release section, and add an item for the last release under the Previous Releases section on the ```get-updates/``` page. 
