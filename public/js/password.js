const togglePasswords = document.querySelectorAll("#toggle_password");
const passwords = document.querySelectorAll("#text_password");

togglePasswords.forEach((togglePassword, index) => {
  togglePassword.addEventListener("click", function () {
    const password = passwords[index];

    // toggle the type attribute
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the eye slash icon
    this.classList.toggle("fa-eye");
  });
});
