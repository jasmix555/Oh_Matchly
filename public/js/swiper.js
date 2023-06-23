document.addEventListener("DOMContentLoaded", function () {
  var nopeButton = document.querySelector(".but-nope");
  var yayButton = document.querySelector(".but-yay");
  var cards = Array.from(document.querySelectorAll(".card"));
  var currentIndex = 0;

  nopeButton.addEventListener("click", function () {
    var currentCard = document.querySelector(".current");
    var nextCard = currentCard.nextElementSibling;

    if (nextCard !== null) {
      currentCard.classList.remove("current");
      currentCard.classList.add("rotate-left");
      nextCard.classList.add("current");
    } else {
      currentCard.classList.remove("current");
      currentCard.classList.add("rotate-left");
      currentIndex = (currentIndex + 1) % cards.length;
      cards[currentIndex].classList.add("current");

      if (currentIndex === 0) {
        resetRotationClasses();
      }
    }
  });

  yayButton.addEventListener("click", function () {
    var currentCard = document.querySelector(".current");
    var nextCard = currentCard.nextElementSibling;

    if (nextCard !== null) {
      currentCard.classList.remove("current");
      currentCard.classList.add("rotate-right");
      nextCard.classList.add("current");
    } else {
      currentCard.classList.remove("current");
      currentCard.classList.add("rotate-right");
      currentIndex = (currentIndex + 1) % cards.length;
      cards[currentIndex].classList.add("current");

      if (currentIndex === 0) {
        resetRotationClasses();
      }
    }
  });

  function resetRotationClasses() {
    cards.forEach(function (card) {
      card.classList.remove("rotate-left");
      card.classList.remove("rotate-right");
    });
  }
});

{
  //counter function
  const counterElement = document.querySelector(".counter");
  const yayButton = document.querySelector(".but-yay");

  // Set the initial counter value
  let counter = 0;

  // Function to handle the button click
  function increaseCounter() {
    if (counter < 10) {
      counter++;
    } else {
      counter = 0;
    }

    // Update the counter element's text
    counterElement.textContent = counter;
  }

  // Add a click event listener to the "but-yay" button
  yayButton.addEventListener("click", increaseCounter);
}
