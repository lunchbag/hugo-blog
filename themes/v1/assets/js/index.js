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

  document.getElementById('floating-subscribe').addEventListener('click',function() {
    document.getElementById('floating-subscribe').classList.add('visible')
  })
});
