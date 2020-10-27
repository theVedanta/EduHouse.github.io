
// Btn ----------------------------------------------------------------
$(document).ready(function(e) {
    $(".btn").on("mouseenter", function(e){
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find("span").css({top: y, left: x})
    })
    $(".btn").on("mouseout", function(e){
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find("span").css({top: y, left: x})
    })
  })
// Carousel -------------------------------------------------------------

// Nav ----------------------------------------------------------------
let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 60) {
        nav.classList.add("darkNav")
    } else {
        nav.classList.remove("darkNav")
    };
});
