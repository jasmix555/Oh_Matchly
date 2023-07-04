const body = document.querySelector("body");
const img = document.querySelector(".machine");
const move = document.querySelector(".move");
const move02 = document.querySelector(".move02");

const capsule = document.querySelector(`.capsule3`);
const modal = document.querySelector(".modal");
const ball = document.querySelector(".ball");

const random = document.querySelector(".random");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

const capsules = document.querySelectorAll(".capsule");
console.log(capsules);

const purple = document.querySelector(".purple");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");

const close = document.querySelectorAll(".fa-xmark");

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

  console.log(close);

  function toggle(elem, className) {
    elem.classList.toggle(className);
  }

  for (let i = 0; i < capsules.length; i++) {
    capsules[i].addEventListener("click", () => {
      if (i === 0) {
        console.log("one");
        toggle(one, "active");
      } else if (i === 1) {
        console.log("two");
        toggle(two, "active");
      } else {
        console.log("three");
        toggle(three, "active");
      }
      toggle(ball, "active");
      toggle(capsule, "active");
    });
  }

  // close.forEach((e, index) => {
  //   e.addEventListener("click", () => {
  //     console.log("削除");
  //     toggle(random, "active");
  //     toggle(ball, "active");
  //     toggle(capsule, "active");
  //     toggle(capsules[index], "active"); // Toggle the specific capsule element
  //   });
  // });
  close.forEach((e, index) => {
    e.addEventListener("click", () => {
      console.log("削除");
      toggle(random, "active");
      toggle(ball, "active");
      toggle(capsule, "active");

      // Toggle the active class on all capsules except the one being closed
      for (let i = 0; i < capsules.length; i++) {
        if (i !== index) {
          toggle(capsules[i], "active");
        }
      }

      toggle(capsules[index], "active"); // Toggle the specific capsule element
    });
  });
});
