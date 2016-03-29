// endorsementsScript.js

var $photoGrid = $('.photo-grid').masonry({
  itemSelector: '.grid-item',
  gutter: 20,
  fitWidth: true
});

$photoGrid.imagesLoaded().progress(function() {
  $photoGrid.masonry('layout');
});
