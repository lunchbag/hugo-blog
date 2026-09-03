document.addEventListener("DOMContentLoaded", function(event) {
  const $header = document.getElementById("post-header");

  function checkHeader() {
    if (window.scrollY > $header.clientHeight) {
      $header.classList.add("smaller");
    } else {
      $header.classList.remove("smaller");
    }
  }

  window.addEventListener("scroll", function(e) {
    if ($header) checkHeader();
  });

  const $subscribe = document.getElementById('floating-subscribe');
  if ($subscribe) {
    $subscribe.addEventListener('click', function() {
      $subscribe.classList.add('visible');
    });
  }
});
