const filter_btn = document.querySelector(".filter-btn");
const dropdown = document.querySelector(".filter-dropdown-wrapper");
console.log(filter_btn);

filter_btn.addEventListener("click", (e) => {
  if (dropdown.style.display == "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});
