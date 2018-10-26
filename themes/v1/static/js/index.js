$(function() {
  function checkElements() {
    const windowTop = $(window).scrollTop();
    const windowBottom = windowTop + $(window).height();
    const windowMid = (windowTop + windowBottom) / 2;
  }

  $(window).scroll(event => {
    checkElements();
  });
  checkElements();
});

//catalogue-item
