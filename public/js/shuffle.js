const body = document.querySelector("body");
const img = document.querySelector(".machine");
const move = document.querySelector(".move");
const move02 = document.querySelector(".move02");

const capsule = document.querySelector(`.capsule3`);
const modal = document.querySelector(".modal");
const ball = document.querySelector(".ball");

const random = document.querySelector(".random");

const purple = document.querySelector(".purple");

const close = document.querySelector(".fa-xmark");

const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  btn.remove();

  move.classList.toggle("active");
  move02.classList.toggle("active");
  const active = document.querySelector(`.active`);
  console.log(active);
  move02.addEventListener("animationend", () => {
    capsule.classList.toggle("active");
    modal.classList.toggle("active");
  });
  modal.addEventListener("animationend", () => {
    ball.classList.toggle("active");
    move02.classList.toggle("active");
    move.classList.toggle("active");
  });
  purple.addEventListener("click", () => {
    // random.classList.toggle("active");
    toggle(random, "active");
    ball.remove();
    capsule.remove();
  });
  close.addEventListener("click", () => {
    toggle(random, "active");
    ball.add();
    capsule.add();
  });
});

function toggle(elem, className) {
  elem.classList.toggle(className);
}
