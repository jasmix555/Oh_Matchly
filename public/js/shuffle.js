console.log("hello");

const img = document.querySelector(`img`);
const moveBox = `img/miki/shuffle_box_move.png`;

const cap = ["", "", ""];

const btn = document.querySelector("button");
console.log(btn);

const interval = 300;

btn.addEventListener("click", (e) => {
  console.log("クリック");
  btn.remove();

  img.src = moveBox;
});
