const categoryBtn = document.querySelectorAll(".register-category li button");

for (let i = 0; i < categoryBtn.length; i++) {
  categoryBtn[i].addEventListener("click", (e) => {
    if (e.target.classList.contains("selected")) {
      e.target.classList.remove("selected");
    } else {
      e.target.classList.add("selected");
    }
  });
}
