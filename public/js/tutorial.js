const body = document.querySelector("body");

let imgList = document.querySelectorAll("li");
let maxC = imgList.length;
let current = 0;

body.addEventListener(`click`, () => {
  console.log("次へ");
  let next;
  if (current < maxC - 1) {
    next = current + 1;
  } else {
    next = 0;
  }

  imgList[current].style.display = "none";
  imgList[next].style.display = "block";
  current = next;

  num++;
  bg.style.backgroundImage = "${pics[num]}";

  console.log(num);
});

const bal01 = document.querySelector(".bal01");
