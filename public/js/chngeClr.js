// const gender = document.querySelectorAll(".register-gender button");

// for (let i = 0; i < gender.length; i++) {
//   gender[i].addEventListener("click", (e) => {
//     if (e.target.classList.contains("selected")) {
//       e.target.classList.remove("selected");
//     } else {
//       e.target.classList.add("selected");
//     }
//   });
// }

const gender = document.querySelectorAll(".register-gender button");

for (let i = 0; i < gender.length; i++) {
  gender[i].addEventListener("click", (e) => {
    const selectedButton = document.querySelector(
      ".register-gender button.selected"
    );

    // Remove 'selected' class from previously selected button (if any)
    if (selectedButton) {
      selectedButton.classList.remove("selected");
    }

    // Add 'selected' class to the clicked button
    e.target.classList.add("selected");
  });
}
