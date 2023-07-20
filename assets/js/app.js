//variables 

const menuIcon = document.getElementById("SidebarIcon")
const sidebar = document.getElementById("Sidebar")
menuIcon.addEventListener("click",() => {
    sidebar.classList.toggle("sidebar-active")
})


$('.hero-slider').slick({
    dots: false,
    infinite: false,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.next-button',
    prevArrow: '.prev-button',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});