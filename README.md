# hca-design-system-guide
HCA Design System Guidelines Site

This site serves as the "map" of HCA Design System. It is the source of truth
that you can count on to point you in the right direction in the world of HCA Design System. 

## Dependencies
1. Node.js & NPM
3. Globally installed Grunt

## Project Setup

1. Clone this repository
2. run `npm install` in the root directory (hca-design-system-guide/)

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


## Styles
Styles are written in SCSS and are kept in the /styles directory. 
They are broken into three main categories:
1. hca-design-system
  -Any styles that are reusable and applicable to the HCA Design System
2. site
  -Any styles that are specificaly pertaining to this site 
3. vendor
  -Any third party or vendor styles or frameworks being used. 
