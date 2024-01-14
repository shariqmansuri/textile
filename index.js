function change1() {
  var abc = document.getElementById("pages");
  abc.classList.toggle("new");
}
function changemenu() {
  var def = document.getElementById("menudown");
  def.classList.toggle("menudownscrip");
}
const counters = document.querySelectorAll(".value");
const speed = 400;

counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("akhi");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
    }
  };
  animate();
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
