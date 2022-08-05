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

// var phone_icon = document.querySelector('.icon2')
// var phone_text = document.querySelector('.icon-text1')

// var email_icon = document.querySelector('.icon1')
// var email_text = document.querySelector('.icon-text2')



// phone_icon.addEventListener('mouseover', function(){
//     phone_text.classList.toggle('d-block')
// })
// email_icon.addEventListener('mouseover', function(){
//     email_text.classList.toggle('d-block')
// })