document.addEventListener("DOMContentLoaded", function () {
  var nopeButton = document.querySelector(".but-nope");
  var yaybutton = document.querySelector(".but-yay");

  nopeButton.addEventListener("click", function () {
    var currentCard = document.querySelector(".current");
    var nextCard = currentCard.nextElementSibling;

    if (nextCard !== null) {
      currentCard.classList.remove("current");
      currentCard.classList.add("rotate-right");
      nextCard.classList.add("current");
    } else {
      currentCard.classList.remove("current");
      currentCard.classList.add("rotate-right");
      document.querySelector(".card:first-child").classList.add("current");
    }
  });

  yaybutton.addEventListener("click", function () {
    var currentCard = document.querySelector(".current");
    var nextCard = currentCard.nextElementSibling;

    if (nextCard !== null) {
      currentCard.classList.remove("current");
      currentCard.classList.add("rotate-left");
      nextCard.classList.add("current");
    } else {
      currentCard.classList.remove("current");
      currentCard.classList.add("rotate-left");
      document.querySelector(".card:first-child").classList.add("current");
    }
  });
});
