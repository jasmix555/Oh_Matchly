const yes = document.querySelector(".yes-btn");
const no = document.querySelector(".no-btn");
const card = document.querySelector(".swiper-wrapper");
const card_wrapper = document.querySelector(".swiper");

function animatecard(ev) {
  var t = ev.target;
  if (t.className === "no-btn") {
    t.parentNode.classList.add("nope");
  }
  if (t.className === "but-yay") {
    t.parentNode.classList.add("yes");
  }
}

document.body.addEventListener("click", animatecard);
