var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    autoplay : true,
    delay : 1000
  });



var image1 = document.getElementById('image1')
var image2 = document.getElementById('image2')




var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3.2,
      spaceBetween: 50,
    },
  }
});




const navbar = document.querySelector('.navbar')

// OnScroll event handler
const onScroll = () => {

  // Get scroll value
  const scroll = document.documentElement.scrollTop

  // If scroll value is more than 0 - add class
  if (scroll > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled")
  }
}


// Use the function
window.addEventListener('scroll', onScroll)
