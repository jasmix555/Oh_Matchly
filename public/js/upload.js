const imgBoxes = document.querySelectorAll(".container");

const loadFile = function (event) {
  const selectedFile = event.target.files[0];

  imgBoxes.forEach((imgBox) => {
    // Check if the input element in the current container matches the event target
    if (imgBox.querySelector('input[type="file"]') === event.target) {
      imgBox.style.backgroundImage =
        "url(" + URL.createObjectURL(selectedFile) + ")";
    }
  });
};
