<script>
// Lazy Load Plugin for Images
(function() {
  var images = document.getElementsByTagName('img');
  var numImages = images.length;
  
  function lazyLoad() {
    for (var i = 0; i < numImages; i++) {
      var image = images[i];
      var src = image.getAttribute('data-src');
      
      if (src && image.getBoundingClientRect().top <= window.innerHeight) {
        // Replace the data-src attribute with the actual source
        image.setAttribute('src', src);
        image.removeAttribute('data-src');
      }
    }
  }
  
  // Attach the lazyLoad function to scroll and resize events
  window.addEventListener('scroll', lazyLoad);
  window.addEventListener('resize', lazyLoad);
  
  // Load initial images on page load
  window.addEventListener('load', lazyLoad);
})();
</script>
