// Star Effect -----------------------------------
document.addEventListener("mousemove", parallax)
function parallax(e){
  this.querySelectorAll(".layer").forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth + e.pageX * speed)/200
    const y = (window.innerWidth + e.pageY * speed)/200

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
  this.querySelectorAll(".layer2").forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX * speed)/200
    const y = (window.innerWidth - e.pageY * speed)/200

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
};