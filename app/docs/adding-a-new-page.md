# Adding a New Page / Topic

(Skip to bottom for New Page Boilerplate)

When creating a new topic, first identify where it will live on the site. 
Our top level directories are Essentials, Components, and Patterns. Most likely 
the page you are creating will live within one of those top level topics. 

See general file tree:

```
app/ (root)
  |--index.hbs (Get Started)
  |
  |--essentials/
  |     |
  |     |---color/
  |     |   |---index.hbs
  |     |
  |     |--typography/
  |     |   |--index.hbs
  |     |  
  |     |--etc...
  |
  |--components/
  |     |--etc...
  |
  |--patterns/
  |     |--etc...
  |
  |--Downloads/
  |     |--index.hbs  
```

Let's pretend for the rest of the examples that the topic we are going to add
is Typography. We have identified that it needs to live in the Essentials/ directory.

## Create a folder for each page/topic 

Rather than create a typography.hbs, we are creating a folder for topic and giving
each folder an index.hbs file. 

This means your page for Typography would live at ```essentials/typography/index.hbs```. 


### Where this lives in the nav
![Step 1](http://www.hcaprototypes.com/images/hca-design-system-docs/1-add-nav-item.png "Add your nav item")


## Add front-matter

Every index.hbs file needs a couple front-matter variables declared at the very top of the file before any other code. 
This is an example of the one used on our Typography page:
 
```
---
layout: default.hbs
title: Typography
base_url: '../../'
---
```
These variables need to be declared between the opening and closing ```---```. 


### layout:

The layout is the most important part, and technically the only variable that is ABSOLUTELY needed. We need a layout declared to handle generating your new page correctly. 

Right now we have two different layout types: ```default.hbs```, and ```no-tabs.hbs```. The default layout creates a page with the three tabs like you see in the demonstrations.  They will always have Usage, Styles, and Code tabs. 

### title:

This is the title of your page. It will appear as the page header, in the app bar fixed to the top of the site, and the the actual ```<title>``` of the html document. 

![Page title](http://www.hcaprototypes.com/images/hca-design-system-docs/2-page-title.png "Set the page title")

### base_url:

This variable is used to prepend to any file references or paths on your page. In this example it is two steps back because the page is nested two directories deep in the file tree. ```essentials/typography/index.hbs```.

An example of this variable being used in markup for an image path:

```
<img src="{{page.base_url}}images/example.jpg" alt="example of color usage in typography"/>
```


## Add your content

You will add your content below the front-matter variables. Make sure you replace the title with the actual title of your page/topic. You may also need to adjust the ```base_url``` depending on where your page sits in the directory tree. 

You can use the Bootstrap grid for layout. 

If you use the default.hbs, make sure you write the markup required for making use of the tabs. These tabs are from Bootstrap, so you will need to simply add the ```tab-content``` wrapper and the three ```tab-pane```s associated with our tabs. 

Remember you can use ```layout: no-tabs.hbs``` if you would like a blank page with just a header and no tabbed layout. (as seen on the root index.hbs or Get Started page) 

Refer to the new page boilerplate for base markup when using tabs. 

### New page boilerplate

```
---
layout: default.hbs
title: Title of your page here.
base_url: '../../'
---

<!-- Tab panes - tab controls in _layouts/default.hbs -->
<div class="tab-content">

  {{!-- USAGE TAB --}}
  <div role="tabpanel" class="tab-pane active" id="hca-styleguide-usage-tab">
    Put your content here. Don't forget to include an app-tab-header that will need a hard coded table of contents for this tab.  
  </div>
  
  {{!-- STYLES TAB --}}
  <div role="tabpanel" class="tab-pane active" id="hca-styleguide-styles-tab">
    Put your content here. Don't forget to include an app-tab-header that will need a hard coded table of contents for this tab.
  </div>
  
  {{!-- CODE TAB --}}
  <div role="tabpanel" class="tab-pane active" id="hca-styleguide-code-tab">
    Coming soon.
  </div>

</div>

```


### Visual Helpers for General Page Layout

#### Step 1
![Step 1](http://www.hcaprototypes.com/images/hca-design-system-docs/1-add-nav-item.png "Add your nav item")

#### Step 2
![Step 2](http://www.hcaprototypes.com/images/hca-design-system-docs/2-page-title.png "Set the page title")

#### Step 3
![Step 3](http://www.hcaprototypes.com/images/hca-design-system-docs/3-tabs.png "your tabs are automatically included from default layout")

#### Step 4
![Step 4](http://www.hcaprototypes.com/images/hca-design-system-docs/4-app-tab-header.png "copy code for tab header from other pages")

#### Step 5
![Step 5](http://www.hcaprototypes.com/images/hca-design-system-docs/5-article-title.png "tabs can have articles. articles can have sections")

#### Step 6
![Step 6](http://www.hcaprototypes.com/images/hca-design-system-docs/6-section-title.png "section titles")

#### Step 7
![Step 7](http://www.hcaprototypes.com/images/hca-design-system-docs/7-section-content.png "section content")

#### Step 8
![Step 8](http://www.hcaprototypes.com/images/hca-design-system-docs/8-visual-examples.png "visual examples")

#### Step 9
![Step 9](http://www.hcaprototypes.com/images/hca-design-system-docs/9-dos-donts.png "dos and donts")
