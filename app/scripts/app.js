var body = document.querySelector('body'),
    drawer = document.querySelector('.hca-layout__drawer'),
    toggle = document.querySelector('.hca-layout__drawer-toggle');

if (window.innerWidth < 1024) {
  body.classList.remove('hca-layout--has-drawer');
  drawer.classList.add('hca-layout__drawer--is-closed');
  toggle.innerHTML = 'Menu';
}

toggle.addEventListener('click', function() {
  if (drawer.classList.contains('hca-layout__drawer--is-closed')) {
    drawer.classList.remove('hca-layout__drawer--is-closed');
    body.classList.add('hca-layout--has-drawer');
    toggle.innerHTML = 'Close';
  }
  else {
    drawer.classList.add('hca-layout__drawer--is-closed');
    body.classList.remove('hca-layout--has-drawer');
    toggle.innerHTML = 'Menu';
  }
});
