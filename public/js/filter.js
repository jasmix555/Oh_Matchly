const filter_btn = document.querySelector(".filter-btn");
const dropdown = document.querySelector(".filter-dropdown-wrapper");

filter_btn.addEventListener("click", (e) => {
  if (dropdown.style.display == "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});

const filterSelect = document.querySelectorAll(".filter-genre li a");

for (let i = 0; i < filterSelect.length; i++) {
  filterSelect[i].addEventListener("click", (e) => {
    if (e.target.classList.contains("selected")) {
      e.target.classList.remove("selected");
    } else {
      e.target.classList.add("selected");
    }
  });
}

const shiboru = document.querySelector(".filter-dropdown-btn");

shiboru.addEventListener("click", (e) => {
  if (dropdown.style.display == "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});

const modalBtn = document.querySelectorAll(".modal-btn");
const modalPage = document.querySelectorAll(".swiper-modal");

modalBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Hide all swiper-modal elements
    modalPage.forEach((page) => {
      page.style.display = "none";
    });

    // Show the corresponding swiper-modal based on the button index
    modalPage[index].style.display = "block";
  });
});
