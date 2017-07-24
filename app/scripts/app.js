// document.addEventListener('DOMContentLoaded', function() {
//   console.log('DOMContentLoaded');
//
//   var componentsDropdown = document.querySelector('.js-component-dropdown');
//   var resourcesDropdown = document.querySelector('.js-resources-dropdown');
//   var appNav = document.querySelector('.js-app-nav');
//   var appNavToggle = document.querySelector('.js-app-nav-toggle');
//
//   componentsDropdown.addEventListener('click', function() {
//     // console.log('componentsDropdown clicked');
//     var componentsDropdownList = this.querySelector('.js-component-dropdown-list');
//
//     if (this.querySelector('.js-component-dropdown-list.app-menu--hidden')) {
//       // console.log('menu is hidden, should show the menu now');
//       componentsDropdownList.classList.remove('app-menu--hidden');
//       this.querySelector('.app-menu__heading').classList.add('app-menu__heading--open');
//     } else {
//       componentsDropdownList.classList.add('app-menu--hidden');
//       this.querySelector('.app-menu__heading').classList.remove('app-menu__heading--open');
//       // console.log('menu is visible, should hide the menu now');
//     }
//   });
//
//   resourcesDropdown.addEventListener('click', function() {
//     // console.log('resourcesDropdown clicked');
//     var resourcesDropdownList = this.querySelector('.js-resources-dropdown-list');
//
//     if (this.querySelector('.js-resources-dropdown-list.app-menu--hidden')) {
//       // console.log('menu is hidden, should show the menu now');
//       resourcesDropdownList.classList.remove('app-menu--hidden');
//     } else {
//       resourcesDropdownList.classList.add('app-menu--hidden');
//       // console.log('menu is visible, should hide the menu now');
//     }
//   });
//
//   appNavToggle.addEventListener('click', function() {
//     console.log('appNavToggle clicked');
//     if (appNav.classList.contains('app-nav--hidden')) {
//       appNav.classList.remove('app-nav--hidden');
//       this.classList.add('app-nav__toggle--open');
//     } else {
//       appNav.classList.add('app-nav--hidden');
//       this.classList.remove('app-nav__toggle--open');
//     }
//   });
// });

$( document ).ready(function() {
    if($(window).width() < 1024) {
      $('body').removeClass('hca-layout--has-drawer');
      $('.hca-layout__drawer').addClass('hca-layout__drawer--is-closed');
      $('.hca-menu-toggle__icon').html('menu');
      $('.hca-menu-toggle__text').html('Menu');
    }
});


$('.hca-menu-toggle').on('click', function(){
  $('.hca-layout__drawer').toggleClass('hca-layout__drawer--is-closed');
  $('body').toggleClass('hca-layout--has-drawer');

  if($('.hca-layout__drawer').hasClass('hca-layout__drawer--is-closed')) {
    $('.hca-menu-toggle__icon').html('menu');
    $('.hca-menu-toggle__text').html('Menu');

  } else {
    $('.hca-menu-toggle__icon').html('close');
    $('.hca-menu-toggle__text').html('Close');
  }
});



//Function for offsetting anchor jumps on page.
// taken from: https://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to

// The function actually applying the offset
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
