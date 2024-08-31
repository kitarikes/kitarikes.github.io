const swiper1 = new Swiper(".swiper1", {
    direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    speed: 6000,
    allowTouchMove: false,
    spaceBetween: 20,
    autoplay: {
      delay: 0,
    },
  });
  const swiper2 = new Swiper(".swiper2", {
    direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    speed: 6000,
    allowTouchMove: false,
    spaceBetween: 20,
    autoplay: {
      delay: 0,
      reverseDirection: true
    },
  });