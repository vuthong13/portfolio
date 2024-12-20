$(document).ready(function() {
  $('.pre-loader-02 .pro span').each(function(i, item) {
    gsap.to($(item), {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.5 * i
    });
  })
  gsap.to($('.pre-loader-02 .pro'), {
    y: '-100%',
    opacity: 0,
    duration: 0.5,
    delay: 0.5 * $('.pre-loader-02 .pro span').length
  });
  gsap.to($('.pre-loader-02 .name .bg'), {
    right: 0,
    duration: 0.5,
    delay: 0.5 * $('.pre-loader-02 .pro span').length + 0.5
  });
  gsap.to($('.pre-loader-02 .name .txt'), {
    opacity: 1,
    duration: 0,
    delay: 0.5 * $('.pre-loader-02 .pro span').length + 0.5*2
  });
  gsap.to($('.pre-loader-02 .name .bg'), {
    left: '100%',
    duration: 0.5,
    delay: 0.5 * $('.pre-loader-02 .pro span').length + 0.5*2
  });
  gsap.to($('.pre-loader-02 .name'), {
    y: '-100%',
    opacity: 0,
    duration: 0.5,
    delay: 0.5 * $('.pre-loader-02 .pro span').length + 0.5*3
  });
  gsap.to($('.pre-loader-02'), {
    autoAlpha: 0,
    duration: 0.5,
    delay: 0.5 * $('.pre-loader-02 .pro span').length + 0.5*4
  });
})