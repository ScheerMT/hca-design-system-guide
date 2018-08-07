///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//functions to be run on load/ready
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
$( document ).ready(function() {
  smallScreenTasks();
  // addTheme();
  activateNavItem();
});



///////////////////////////////////////////////////////////////////////////////
//fuction for menu toggle
///////////////////////////////////////////////////////////////////////////////
$('.hca-menu-toggle').on('click', function(){
  $('.site-drawer').toggleClass('site-drawer--is-closed');
  $('body').toggleClass('site-layout--has-drawer');

  if($('.site-drawer').hasClass('site-drawer--is-closed')) {
    $('.hca-menu-toggle').attr('title', 'Menu');
    $('.hca-menu-toggle__icon').html('menu');
    $('.hca-menu-toggle__text').html('Menu');
  } else {
    $('.hca-menu-toggle').attr('title', 'Close');
    $('.hca-menu-toggle__icon').html('close');
    $('.hca-menu-toggle__text').html('Close');
  }
});


///////////////////////////////////////////////////////////////////////////////
//Function for offsetting anchor jumps on page.
// taken from: https://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to
//
// The function actually applying the offset
///////////////////////////////////////////////////////////////////////////////
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    }
}
// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);
// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(offsetAnchor, 1); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).




///////////////////////////////////////////////////////////////////////////////
//function to check if screen is less than 1200px and run tasks
///////////////////////////////////////////////////////////////////////////////
var smallScreenTasks = function() {
  if($(window).width() < 1200) {
    $('body').removeClass('site-layout--has-drawer');
    $('.site-drawer').addClass('site-drawer--is-closed');
    $('.hca-menu-toggle__icon').html('menu');
    $('.hca-menu-toggle__text').html('Menu');
  }
}


///////////////////////////////////////////////////////////////////////////////
//function called on load to add color theme
///////////////////////////////////////////////////////////////////////////////
var addTheme = function() {
  //create array of colors. each index is another array of color classes
  var colors = new Array();
  colors[0] = new Array("hca-background--cadet-gradient","hca-background--white");
  colors[1] = new Array("hca-background--evening-gradient","hca-background--morning");
  colors[2] = new Array("hca-background--ivy-gradient","hca-background--mint");
  colors[3] = new Array("hca-background--hazelnut-gradient","hca-background--vanilla");
  colors[4] = new Array("hca-background--cherry-gradient","hca-background--teaberry");

  //generate random number between 0-4 to choose which colors[] array to choose
  var colorScheme = Math.floor(Math.random() * 5);

  $('.hca-js-app-bar').addClass(colors[colorScheme][0,0]); //adds first color in array to app-bar
  $('.hca-js-site-header').addClass(colors[colorScheme][0,1]); //adds second color in array to site-header
}



///////////////////////////////////////////////////////////////////////////////
// Function to match active nav item to url
///////////////////////////////////////////////////////////////////////////////
var activateNavItem = function() {
  //get url path to match and remove trailing "/"
  var urlPathToMatch = window.location.pathname.replace(/\/$/, "");
  // get nav drawer for scope
  var drawerNav = document.querySelector('.js-site-drawer-nav');
  //get nav items in nav drawer
  var drawerNavItems = drawerNav.querySelectorAll('.js-site-drawer-nav__item');

  // check every item in the nav drawer
  i = 0;
  for(navItem in drawerNavItems) {
    var drawerNavItem = drawerNavItems[i];

    // get the href of nav item and remove trailing "/"
    var navItemHref = drawerNavItem.pathname.replace(/\/$/, "");

    // if href matches current pages path add active class to that anchor element
    if(navItemHref.indexOf(urlPathToMatch) > -1) {
      //if element has a parent with class "collapse"

      if(drawerNavItem.closest('.collapse')) {
        //get only the parent .collapse element (plugin class)
        var navItemSection = drawerNavItem.closest('.collapse');
        //add plugin class "in"
        $(navItemSection).addClass('in');
        //get id of .collapse section
        var idToMatch = navItemSection.id;
        //get collapse trigger with href that matches .collapse id.
        var matchingElement = drawerNav.querySelectorAll('a[href="#'+idToMatch+'"]');
        //remove collapsed class from trigger
        $(matchingElement).removeClass('collapsed');
      }
      //add active class to nav item
      drawerNavItem.classList.add('site-drawer-nav__item--active');
      return;
    } else {
      //else move on to the next item in nav drawer
      i++;
    }
  }
  //end loop checking nav items in nav drawer
}
//end activateNavItem function
