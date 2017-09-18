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


// $( document ).ready(function() {
//   var colors = {
//     ["hca-background--cadet","hca-background--white"],
//     ["hca-background--evening","hca-background--morning"],
//     ["hca-background--ivy","hca-background--mint"],
//     ["hca-background--hazelnut","hca-background--vanilla"],
//     ["hca-background--cherry","hca-background--watermelon"]
//   };
//   //get random class for app bar
//   //add to app bar
//
//   //get random class for app header
//   //add to app header
//
// });
