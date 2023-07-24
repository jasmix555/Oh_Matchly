const bookBtn = document.querySelector(`.book`);
const bookedWrap = document.querySelector(`.bookedWrap`);

// bookBtn.addEventListener("click", () => {
//   console.log("予約確定");
//   bookBtn.innerHTML = "<h3>予約済み</h3>";
//   bookedWrap.classList.toggle("active");
// });

document.addEventListener("click", (e) => {
  if (bookBtn) {
    console.log("予約確定");
    bookBtn.innerHTML = "<h3>予約済み</h3>";
    bookedWrap.classList.toggle("active");
  }
});
