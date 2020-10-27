// Nav Darkening ------------------------------------
let nav = document.querySelector("nav")

window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 60) {
        nav.classList.add("darkNav")
    } else {
        nav.classList.remove("darkNav")
    };

    let title = document.querySelector(".hero h1");
    let heroBtn = document.querySelector(".hero .btn");
    let h3 = document.querySelector(".hero h3");
    let img = document.querySelector(".hero img");
    title.style.transform = `translateY(${pageYOffset/2}px)`;
    heroBtn.style.transform = `translateY(${pageYOffset/2}px)`;
    h3.style.transform = `translateY(${pageYOffset/2}px)`;
    img.style.transform = `translateY(${pageYOffset/2}px)`;
    if (pageYOffset < 200) {
        title.style.opacity = "1";
        heroBtn.style.opacity = "1";
        h3.style.opacity = "1";
        img.style.opacity = "1";
    } else if(pageYOffset > 500) {
      title.style.opacity = "0";
      heroBtn.style.opacity = "0";
      h3.style.opacity = "0";
      img.style.opacity = "0";
    } else {
        title.style.opacity = `${pageYOffset/1000}`;
        heroBtn.style.opacity = `${pageYOffset/1000}`;
        h3.style.opacity = `${pageYOffset/1000}`;
        img.style.opacity = `${pageYOffset/1000}`;
    };
});
// Star Effect -----------------------------------
document.addEventListener("mousemove", starMove)
function starMove(e){
  this.querySelectorAll(".layer").forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth + e.pageX * speed)/250
    const y = (window.innerWidth + e.pageY * speed)/250

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
  this.querySelectorAll(".layer2").forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX * speed)/250
    const y = (window.innerWidth - e.pageY * speed)/250

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
};
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