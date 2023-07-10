const bookBtn = document.querySelector(`.book`);
const bookedWrap = document.querySelector(`.bookedWrap`);

bookBtn.addEventListener("click", () => {});

document.addEventListener("click", (e) => {
  if (bookBtn) {
    console.log("予約確定");
    bookedWrap.classList.toggle("active");
    bookBtn.innerHTML = "<h3>予約済み</h3>";
  }
});
