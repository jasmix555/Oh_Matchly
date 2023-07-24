document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const submitButton = document.getElementById("submit-button");

  // Add an event listener to the form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Handle form submission here (you can send the form data to the server if needed)

    // Redirect the user to home.html
    window.location.href = "home.html";
  });

  // Alternatively, if you want to redirect on button click directly (without form submission)
  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default button click behavior

    // Redirect the user to home.html
    window.location.href = "home.html";
  });
});
