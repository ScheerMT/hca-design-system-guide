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
