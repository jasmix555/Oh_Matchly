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
// console.log(capsules);

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
  // capsules.forEach((e) => {
  //   console.log(e);

  // });

  //動かん
  // function toggle(elem, className) {
  //   elem.classList.toggle(className);
  // }

  // for (let i = 0; i < capsules.length; i++) {
  //   capsules[i].addEventListener("click", () => {
  //     if (i === 0) {
  //       console.log("one");
  //       toggle(one, "active");
  //       ball.classList.toggle("active");
  //       capsule.classList.toggle("active");
  //     } else if (i === 1) {
  //       console.log("two");
  //       toggle(two, "active");
  //       ball.classList.toggle("active");
  //       capsule.classList.toggle("active");
  //     } else {
  //       console.log("three");
  //       toggle(three, "active");
  //       ball.classList.toggle("active");
  //       capsule.classList.toggle("active");
  //     }
  //   });
  // }

  // close.forEach((e) => {
  //   e.addEventListener("click", () => {
  //     console.log("削除");
  //     toggle(random, "active");
  //     ball.classList.toggle("active");
  //     capsule.classList.toggle("active");
  //   });
  // });
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

  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", () => {
      if (i === 0) {
        console.log("one削除");
        toggle(one, "active");
      } else if (i === 1) {
        console.log("two削除");
        toggle(two, "active");
      } else {
        console.log("three削除");
        toggle(three, "active");
      }
      toggle(ball, "active");
      toggle(capsule, "active");
    });
  }

  // close.forEach((e, index) => {
  //   console.log(e);
  //   e.addEventListener("click", () => {
  //     console.log("削除");
  //     toggle(random, "active");
  //     toggle(ball, "active");
  //     console.log("削除したよ");
  //     toggle(capsule, "active");
  //   });
  // });
});
