var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    autoplay : true,
    delay : 1000
  });


var image1 = document.getElementById('image1')
var image2 = document.getElementById('image2')


var span1 = document.getElementById('span1')
var span2 = document.getElementById('span2')

image1.addEventListener('mouseover', function(){
  span1.style.display='block'
})

image1.addEventListener('mouseleave', function(){
  span1.style.display='none'
})

image2.addEventListener('mouseover', function(){
  span2.style.display='block'
})

image2.addEventListener('mouseleave', function(){
  span2.style.display='none'
})

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