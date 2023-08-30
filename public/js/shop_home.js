const postBtn = document.querySelector("button");

postBtn.addEventListener("click", () => {
  postBtn.style.backgroundColor = "#2F6457";
  postBtn.style.color = "#FABC60";
  postBtn.innerHTML = "投稿中";
});

const focusOff = document.querySelectorAll(".focusOff");
focusOff[0].addEventListener("click", () => {
  if ((focusOff[0].style.opacity = 1)) {
    console.log("click");
    focusOff[0].style.opacity = 0;
    focusOff[1].style.opacity = 1;
    focusOff[2].style.opacity = 1;
  }
});
focusOff[1].addEventListener("click", () => {
  if ((focusOff[1].style.opacity = 1)) {
    console.log("click");
    focusOff[1].style.opacity = 0;
    focusOff[2].style.opacity = 1;
    focusOff[0].style.opacity = 1;
  }
});
focusOff[2].addEventListener("click", () => {
  if ((focusOff[2].style.opacity = 1)) {
    console.log("click");
    focusOff[2].style.opacity = 0;
    focusOff[0].style.opacity = 1;
    focusOff[1].style.opacity = 1;
  }
});

const book = document.querySelector(".book");
const modalBg = document.querySelector(".modalBg");
const modal = document.querySelector(".modal");
const arrBtn = document.querySelector(".arrivedBtn");
book.addEventListener("click", () => {
  modalBg.classList.add("show");
  modal.classList.add("show");
});
arrBtn.addEventListener("click", () => {
  modalBg.classList.remove("show");
  modal.classList.remove("show");
});
